import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface UserMetadata {
  role: string;
  inmobiliaria_id: string;
}

interface AuthUser {
  id: string;
  email: string;
  app_metadata: UserMetadata;
  user_metadata: {
    name?: string;
  };
  created_at: string;
  updated_at: string;
  last_sign_in: string;
  role?: string;
  aud: string;
  inmobiliaria?: {
    id: string;
    nombre: string;
  } | null;
}

interface AuthContextType {
  role: string | null;
  user: AuthUser | null;
}

const AuthContext = createContext<AuthContextType>({
  role: null,
  user: null
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Obtener datos adicionales del usuario desde la tabla users
          const { data: userData, error: userError } = await supabase
            .from('users')
            .select(`
              *,
              inmobiliaria:inmobiliarias!inmobiliaria_id (
                id,
                nombre
              )
            `)
            .eq('id', session.user.id)
            .single();

          if (userError) {
            console.error('Error al obtener datos del usuario:', userError);
            return;
          }

          if (userData) {
            // Combinar datos de auth y users
            const userWithMetadata = {
              ...session.user,
              app_metadata: {
                ...session.user.app_metadata,
                role: userData.role,
                inmobiliaria_id: userData.inmobiliaria_id
              },
              inmobiliaria: Array.isArray(userData.inmobiliaria) 
                ? userData.inmobiliaria[0] 
                : userData.inmobiliaria,
              role: userData.role
            } as AuthUser;

            setUser(userWithMetadata);
            setRole(userData.role);
            
            console.log('Usuario autenticado:', {
              id: userWithMetadata.id,
              role: userData.role,
              inmobiliaria_id: userData.inmobiliaria_id,
              inmobiliaria: userData.inmobiliaria
            });
          }
        }
      } catch (err) {
        console.error('Error al obtener sesión:', err);
      }
    };

    getCurrentUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          try {
            const { data: userData, error: userError } = await supabase
              .from('users')
              .select(`
                *,
                inmobiliaria:inmobiliarias!inmobiliaria_id (
                  id,
                  nombre
                )
              `)
              .eq('id', session.user.id)
              .single();

            if (userError) {
              console.error('Error al obtener datos del usuario:', userError);
              return;
            }

            if (userData) {
              const userWithMetadata = {
                ...session.user,
                app_metadata: {
                  ...session.user.app_metadata,
                  role: userData.role,
                  inmobiliaria_id: userData.inmobiliaria_id
                },
                inmobiliaria: Array.isArray(userData.inmobiliaria)
                  ? userData.inmobiliaria[0]
                  : userData.inmobiliaria,
                role: userData.role
              } as AuthUser;

              setUser(userWithMetadata);
              setRole(userData.role);

              console.log('Usuario actualizado:', {
                id: userWithMetadata.id,
                role: userData.role,
                inmobiliaria_id: userData.inmobiliaria_id,
                inmobiliaria: userData.inmobiliaria
              });
            }
          } catch (err) {
            console.error('Error al actualizar datos del usuario:', err);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setRole(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ role, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);