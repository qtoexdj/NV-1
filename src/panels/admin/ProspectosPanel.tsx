import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { Prospecto, Etapa, Proyecto } from '../../types/prospectos';

const ProspectosPanel: React.FC = () => {
  const { user } = useAuth();
  const [prospectos, setProspectos] = useState<Prospecto[]>([]);
  const [etapas, setEtapas] = useState<Etapa[]>([]);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inmobiliariaId = user?.app_metadata?.inmobiliaria_id;
        
        // Cargar datos
        const [prospectosRes, etapasRes, proyectosRes] = await Promise.all([
          supabase
            .from('prospectos')
            .select(`
              *,
              etapa:etapas(*),
              proyecto:proyectos(*)
            `)
            .eq('inmobiliaria_id', inmobiliariaId),
          supabase
            .from('etapas')
            .select('*')
            .eq('inmobiliaria_id', inmobiliariaId)
            .order('orden'),
          supabase
            .from('proyectos')
            .select('*')
            .eq('inmobiliaria_id', inmobiliariaId)
        ]);

        if (prospectosRes.error) throw prospectosRes.error;
        if (etapasRes.error) throw etapasRes.error;
        if (proyectosRes.error) throw proyectosRes.error;

        setProspectos(prospectosRes.data || []);
        setEtapas(etapasRes.data || []);
        setProyectos(proyectosRes.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-6">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Prospectos</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Nuevo Prospecto
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                WhatsApp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Etapa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Proyecto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seguimientos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {prospectos.map((prospecto) => (
              <tr key={prospecto.id}>
                <td className="px-6 py-4 whitespace-nowrap">{prospecto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{prospecto.whatsapp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span 
                    className="px-2 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: prospecto.etapa?.color || '#ddd',
                      color: '#fff'
                    }}
                  >
                    {prospecto.etapa?.nombre || 'Sin etapa'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {prospecto.proyecto?.nombre || 'Sin proyecto'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {prospecto.cantidad_seguimientos}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                    Editar
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ProspectosPanel };