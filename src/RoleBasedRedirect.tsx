import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Definir roles como constantes para evitar errores de tipeo
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  DEV: 'dev',
} as const;

// Tipos más estrictos
export type UserRole = typeof ROLES[keyof typeof ROLES];
export type RoleRoute = Record<UserRole, string>;

// Definir rutas por rol con validación de tipo
export const ROLE_ROUTES: RoleRoute = {
  [ROLES.ADMIN]: '/admin',
  [ROLES.USER]: '/user',
  [ROLES.DEV]: '/dev',
};

// Utilidad para verificar si un rol es válido
const isValidRole = (role: string | null): role is UserRole => {
  return role !== null && Object.values(ROLES).includes(role as UserRole);
};

// Componente principal con mejor manejo de tipos
const RoleBasedRedirect: React.FC = () => {
  const navigate = useNavigate();
  const { role, user } = useAuth();

  useEffect(() => {
    const checkAndRedirect = async () => {
      try {
        // Log estructurado para debugging
        const debugInfo = {
          timestamp: new Date().toISOString(),
          context: {
            userId: user?.id || 'no-id',
            email: user?.email || 'no-email',
            role: role || 'no-role',
            metadata: user?.app_metadata || {},
          },
          sessionValid: !!user,
          hasRole: !!role,
        };

        console.log('🔍 Información de debugging:', debugInfo);

        // Verificación por etapas con logs descriptivos
        if (!user) {
          console.warn('🚫 Redirección: Usuario no autenticado', {
            timestamp: new Date().toISOString(),
            reason: 'NO_USER',
          });
          navigate('/login');
          return;
        }

        if (!role) {
          console.error('❌ Redirección: Rol no definido', {
            timestamp: new Date().toISOString(),
            reason: 'NO_ROLE',
            userId: user.id,
          });
          navigate('/login');
          return;
        }

        // Verificación de rol con tipado estricto
        if (!isValidRole(role)) {
          console.error('❌ Redirección: Rol inválido', {
            timestamp: new Date().toISOString(),
            reason: 'INVALID_ROLE',
            providedRole: role,
            validRoles: Object.values(ROLES),
            userId: user.id,
          });
          navigate('/login');
          return;
        }

        // Verificar y obtener la ruta correspondiente
        const targetRoute = ROLE_ROUTES[role];
        if (!targetRoute) {
          console.error('❌ Redirección: Ruta no definida para rol', {
            timestamp: new Date().toISOString(),
            reason: 'NO_ROUTE_FOR_ROLE',
            role,
            userId: user.id,
          });
          navigate('/login');
          return;
        }

        // Log de redirección exitosa
        console.log('✅ Redirección exitosa:', {
          timestamp: new Date().toISOString(),
          userId: user.id,
          role,
          targetRoute,
          metadata: {
            email: user.email,
            lastSignIn: user.last_sign_in,
          },
        });

        navigate(targetRoute);
      } catch (error) {
        // Log detallado de errores
        console.error('❌ Error crítico en redirección:', {
          timestamp: new Date().toISOString(),
          error: error instanceof Error ? {
            name: error.name,
            message: error.message,
            stack: error.stack,
          } : error,
          context: {
            userId: user?.id,
            role,
          },
        });
        navigate('/login');
      }
    };

    checkAndRedirect();
  }, [navigate, role, user]);

  // Componente de carga mejorado
  if (!role || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-4 rounded-lg shadow-sm bg-white">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700 font-medium">Verificando permisos...</p>
          <p className="mt-2 text-sm text-gray-500">
            {!user ? 'Cargando información del usuario...' : 'Validando rol de acceso...'}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default RoleBasedRedirect;
