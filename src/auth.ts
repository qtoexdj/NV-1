import { supabase, supabaseAdmin } from './supabaseClient';

export const signIn = async (email: string, password: string) => {
  try {
    const { data: { user }, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !user) {
      console.error('Error al iniciar sesión:', error?.message);
      return null;
    }

    // Obtener datos completos del usuario
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*, inmobiliaria:inmobiliarias!inmobiliaria_id(*)')
      .eq('id', user.id)
      .single();

    if (userError) {
      console.error('Error al obtener datos del usuario:', userError.message);
      return null;
    }

    // Combinar datos de autenticación con datos de usuario
    const userWithMetadata = {
      ...user,
      app_metadata: {
        ...user.app_metadata,
        role: userData.role,
        inmobiliaria_id: userData.inmobiliaria_id
      }
    };

    console.log('Usuario autenticado:', {
      id: userWithMetadata.id,
      role: userData.role,
      inmobiliaria_id: userData.inmobiliaria_id,
      app_metadata: userWithMetadata.app_metadata
    });

    return { user: userWithMetadata, role: userData.role };
  } catch (error) {
    console.error('Error inesperado:', error);
    return null;
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error al cerrar sesión:', error.message);
  }
};

export interface PublicUser {
  id: string;
  email: string;
  role: string;
  inmobiliaria_id: string;
  created_at: string;
}

export const getPublicUser = async (): Promise<PublicUser | null> => {
  try {
    const { data: { user: authUser } } = await supabase.auth.getUser();

    if (!authUser) {
      console.error('No se pudo obtener el usuario autenticado.');
      return null;
    }

    const { data: publicUser, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (error || !publicUser) {
      console.error('Error al obtener datos del usuario:', error?.message);
      return null;
    }

    return publicUser;
  } catch (error) {
    console.error('Error en getPublicUser:', error);
    return null;
  }
};

export const checkUserRole = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  // Solo usar app_metadata para roles
  const role = session.user.app_metadata?.role;
  return role || 'user';
};

export const updateUserRole = async (userId: string, role: string) => {
  try {
    const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
      userId,
      {
        app_metadata: { role }, // Solo actualizar app_metadata
        user_metadata: {} // No modificar user_metadata
      }
    );

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating user role:', error);
    throw error;
  }
};

export const getUserRole = async (): Promise<'admin' | 'user' | 'dev' | null> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      console.error('No se pudo obtener el usuario autenticado.');
      return null;
    }

    // Obtener datos actualizados del usuario
    const { data: userData, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (error || !userData) {
      console.error('Error al obtener rol del usuario:', error?.message);
      return null;
    }

    return userData.role as 'admin' | 'user' | 'dev';
  } catch (error) {
    console.error('Error en getUserRole:', error);
    return null;
  }
};

export const checkUserClaims = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    console.error('No session found');
    return null;
  }

  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    console.error('No user found');
    return null;
  }

  // Obtener datos actualizados del usuario
  const { data: userData, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error || !userData) {
    console.error('Error al obtener datos del usuario:', error?.message);
    return null;
  }

  const userWithMetadata = {
    ...user,
    app_metadata: {
      ...user.app_metadata,
      role: userData.role,
      inmobiliaria_id: userData.inmobiliaria_id
    }
  };

  console.log('Auth Status:', {
    accessToken: session.access_token,
    userId: userWithMetadata.id,
    userRole: userData.role,
    app_metadata: userWithMetadata.app_metadata,
    user_metadata: userWithMetadata.user_metadata
  });

  return userWithMetadata;
};
