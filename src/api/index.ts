import { supabase, supabaseAdmin } from '../supabaseClient';

export interface Inmobiliaria {
  id: string;
  nombre: string;
}

export interface User {
  id: string;
  email: string;
  role: string;
  inmobiliaria_id: string;
  name: string;
  inmobiliaria: Inmobiliaria | null;
}

export interface UpdateUserData {
  name?: string;
  role?: string;
  inmobiliaria_id?: string;
}

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  role: string;
  inmobiliaria_id: string;
}

export const createUser = async (data: CreateUserData): Promise<{ data: User | null; error: any | null }> => {
  try {
    console.log('Creating user with data:', {
      ...data,
      password: '[REDACTED]'
    });

    // 1. Crear el usuario en auth.users
    const { data: authUser, error: signUpError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
      app_metadata: {
        role: data.role,
        inmobiliaria_id: data.inmobiliaria_id
      },
      user_metadata: {
        name: data.name
      }
    });

    if (signUpError) {
      console.error('Auth creation error:', signUpError);
      throw signUpError;
    }

    // 2. Crear el usuario en public.users usando RPC
    const { error: rpcError } = await supabaseAdmin.rpc(
      'create_user_admin',
      {
        p_user_id: authUser.user.id,
        p_email: data.email,
        p_name: data.name,
        p_role: data.role,
        p_inmobiliaria_id: data.inmobiliaria_id
      }
    );

    if (rpcError) {
      console.error('RPC error:', rpcError);
      // Limpiar el usuario de auth si falla la creación en la base de datos
      await supabaseAdmin.auth.admin.deleteUser(authUser.user.id);
      throw rpcError;
    }

    // 3. Obtener el usuario creado con todas sus relaciones
    const { data: userData, error: fetchError } = await supabaseAdmin
      .from('users')
      .select(`
        id,
        email,
        name,
        role,
        inmobiliaria_id,
        inmobiliaria:inmobiliarias!inmobiliaria_id (
          id,
          nombre
        )
      `)
      .eq('id', authUser.user.id)
      .single();

    if (fetchError) {
      console.error('Error fetching created user:', fetchError);
      throw fetchError;
    }

    console.log('User created successfully:', userData);

    return {
      data: {
        ...userData,
        inmobiliaria: userData.inmobiliaria?.[0] || null
      },
      error: null
    };

  } catch (error) {
    console.error('Error in createUser:', error);
    return { data: null, error };
  }
};

export const getAllInmobiliarias = async (): Promise<Inmobiliaria[]> => {
  try {
    const { data, error } = await supabase
      .from('inmobiliarias')
      .select('id, nombre');

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching inmobiliarias:', error);
    return [];
  }
};

export const getAllUsers = async (currentUser?: User): Promise<User[]> => {
  try {
    let query = supabaseAdmin
      .from('users')
      .select(`
        id,
        email,
        name,
        role,
        inmobiliaria_id,
        inmobiliaria:inmobiliarias!inmobiliaria_id (
          id,
          nombre
        )
      `);

    if (currentUser?.role === 'admin') {
      query = query.eq('inmobiliaria_id', currentUser.inmobiliaria_id);
    }
    else if (currentUser?.role !== 'dev') {
      return [];
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Error in getAllUsers:', error);
      throw error;
    }
    
    // Transformar los datos para que coincidan con la interfaz User
    return (data || []).map(user => ({
      ...user,
      inmobiliaria: user.inmobiliaria?.[0] || null
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const deleteUser = async (userId: string): Promise<{ error: any | null }> => {
  try {
    // 1. Primero eliminar el usuario de auth.users
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      console.error('Auth deletion error:', authError);
      throw authError;
    }

    // 2. Eliminar el usuario de public.users usando RPC
    const { error: rpcError } = await supabaseAdmin.rpc(
      'delete_user_admin',
      {
        p_user_id: userId
      }
    );

    if (rpcError) {
      console.error('Database deletion error:', rpcError);
      throw rpcError;
    }

    return { error: null };
  } catch (error) {
    console.error('Error in deleteUser:', error);
    return { error };
  }
};

export interface CreateInmobiliariaData {
  nombre: string;
}

export const createInmobiliaria = async (data: CreateInmobiliariaData): Promise<{ data: any | null; error: any | null }> => {
  try {
    const { data: newInmobiliaria, error } = await supabase
      .from('inmobiliarias')
      .insert([data])
      .select()
      .single();

    return { data: newInmobiliaria, error };
  } catch (error) {
    console.error('Error creating inmobiliaria:', error);
    return { data: null, error };
  }
};

export const deleteInmobiliaria = async (id: string): Promise<{ error: any | null }> => {
  try {
    const { error } = await supabase
      .from('inmobiliarias')
      .delete()
      .eq('id', id);

    return { error };
  } catch (error) {
    console.error('Error deleting inmobiliaria:', error);
    return { error };
  }
};

export const getUsersByInmobiliariaId = async (inmobiliariaId: string): Promise<User[]> => {
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select(`
        *,
        inmobiliaria:inmobiliarias!inmobiliaria_id (
          id,
          nombre
        )
      `)
      .eq('inmobiliaria_id', inmobiliariaId);

    if (error) throw error;
    // Transformar los datos para que coincidan con la interfaz User
    return (data || []).map(user => ({
      ...user,
      inmobiliaria: user.inmobiliaria?.[0] || null
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const updateUser = async (userId: string, updates: UpdateUserData): Promise<{ data: User | null; error: any | null }> => {
  try {
    console.log('Updating user with admin client:', {
      userId,
      updates
    });

    // 1. Actualizar auth.users primero
    if (updates.role || updates.inmobiliaria_id) {
      const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        {
          app_metadata: {
            ...(updates.role && { role: updates.role }),
            ...(updates.inmobiliaria_id && { inmobiliaria_id: updates.inmobiliaria_id })
          }
        }
      );

      if (authError) {
        console.error('Auth update error:', authError);
        throw authError;
      }
    }

    // 2. Actualizar public.users usando rpc para evitar problemas de RLS
    const { error: updateError } = await supabaseAdmin.rpc(
      'update_user_admin',
      {
        p_user_id: userId,
        p_name: updates.name,
        p_role: updates.role,
        p_inmobiliaria_id: updates.inmobiliaria_id
      }
    );

    if (updateError) {
      console.error('Database update error:', updateError);
      throw updateError;
    }

    // 3. Obtener el usuario actualizado
    const { data: userData, error: fetchError } = await supabaseAdmin
      .from('users')
      .select(`
        id,
        email,
        name,
        role,
        inmobiliaria_id,
        inmobiliaria:inmobiliarias!inmobiliaria_id (
          id,
          nombre
        )
      `)
      .eq('id', userId)
      .single();

    if (fetchError) {
      console.error('Fetch updated user error:', fetchError);
      throw fetchError;
    }

    // Transformar la propiedad inmobiliaria para que coincida con la interfaz User
    const transformedUser = {
      ...userData,
      inmobiliaria: userData.inmobiliaria?.[0] || null
    };

    return { data: transformedUser, error: null };
  } catch (error) {
    console.error('Error in updateUser:', error);
    return { data: null, error };
  }
};