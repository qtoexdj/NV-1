import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { UserList } from '../../components';
import { User } from '../../api';

interface Vendedor extends User {
  inmobiliaria: {
    id: string;
    nombre: string;
  } | null;
}

export const VendedoresPanel: React.FC = () => {
  const { user } = useAuth();
  const [vendedores, setVendedores] = useState<Vendedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inmobiliarias, setInmobiliarias] = useState<{ id: string; nombre: string }[]>([]);

  useEffect(() => {
    const fetchVendedores = async () => {
      try {
        const inmobiliariaId = user?.app_metadata?.inmobiliaria_id;
        const userRole = user?.app_metadata?.role;

        console.log('Debug - Usuario actual:', {
          id: user?.id,
          role: userRole,
          inmobiliariaId
        });

        // Consulta base para vendedores
        let query = supabase
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

        // Filtrar según el rol
        if (userRole === 'admin') {
          query = query.eq('inmobiliaria_id', inmobiliariaId);
        }

        const { data: vendedoresData, error: vendedoresError } = await query;

        if (vendedoresError) throw vendedoresError;

        // Obtener inmobiliarias según el rol
        const { data: inmobiliariasData, error: inmobiliariasError } = await supabase
          .from('inmobiliarias')
          .select('id, nombre')
          .eq('id', inmobiliariaId);

        if (inmobiliariasError) throw inmobiliariasError;

        // Transformar los datos para que coincidan con la interfaz
        const vendedoresTransformed = vendedoresData?.map(v => ({
          ...v,
          inmobiliaria: Array.isArray(v.inmobiliaria) ? v.inmobiliaria[0] : v.inmobiliaria
        })) || [];

        console.log('Vendedores encontrados:', vendedoresTransformed);
        setVendedores(vendedoresTransformed);
        setInmobiliarias(inmobiliariasData || []);

      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar vendedores');
      } finally {
        setLoading(false);
      }
    };

    if (user?.app_metadata?.inmobiliaria_id) {
      fetchVendedores();
    }
  }, [user]);

  const handleUserUpdated = (updatedUser: User) => {
    setVendedores(prev =>
      prev.map(v => v.id === updatedUser.id ? { ...updatedUser } as Vendedor : v)
    );
  };

  const handleUserDeleted = (userId: string) => {
    setVendedores(prev => prev.filter(v => v.id !== userId));
  };

  if (loading) {
    return <div className="p-4">Cargando...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vendedores</h2>
        <UserList
          users={vendedores}
          inmobiliarias={inmobiliarias}
          onUserUpdated={handleUserUpdated}
          onUserDeleted={handleUserDeleted}
        />
      </div>
    </div>
  );
};

export default VendedoresPanel;