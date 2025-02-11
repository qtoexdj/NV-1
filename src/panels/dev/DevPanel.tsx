import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { deleteInmobiliaria, createInmobiliaria, type CreateInmobiliariaData } from '../../api';
import { Sidebar, Header, MetricCard } from '../../components';
import UsersPanel from '../UsersPanel';

interface Inmobiliaria {
  id: string;
  nombre: string;
  total_usuarios: number;
}

const DevPanel: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('inmobiliarias');
  const [inmobiliarias, setInmobiliarias] = useState<Inmobiliaria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);
  const [newInmobiliaria, setNewInmobiliaria] = useState<CreateInmobiliariaData>({ nombre: '' });
  const [createError, setCreateError] = useState<string | null>(null);
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [totalInmobiliarias, setTotalInmobiliarias] = useState(0);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateError(null);
    setCreateSuccess(null);

    const { data, error } = await createInmobiliaria(newInmobiliaria);
    
    if (error) {
      setCreateError(`Error al crear la inmobiliaria: ${error.message}`);
    } else {
      setCreateSuccess(`Inmobiliaria "${newInmobiliaria.nombre}" creada exitosamente`);
      setNewInmobiliaria({ nombre: '' });
      if (data) {
        setInmobiliarias([...inmobiliarias, {
          id: data.id,
          nombre: data.nombre,
          total_usuarios: 0
        }]);
      }
    }
  };

  useEffect(() => {
    if (activeSection === 'inmobiliarias') {
      const fetchData = async () => {
        try {
          const { data: inmobiliariasData, error: inmobiliariasError } = await supabase
            .from('inmobiliarias')
            .select(`
              id,
              nombre,
              users!inmobiliaria_id (
                id
              )
            `);

          if (inmobiliariasError) throw inmobiliariasError;

          const inmobiliariasFormatted = inmobiliariasData.map(inmobiliaria => ({
            id: inmobiliaria.id,
            nombre: inmobiliaria.nombre,
            total_usuarios: Array.isArray(inmobiliaria.users) ? inmobiliaria.users.length : 0
          }));
          
          const { count: userCount, error: userCountError } = await supabase
            .from('users')
            .select('*', { count: 'exact', head: true });

          if (userCountError) throw userCountError;

          setInmobiliarias(inmobiliariasFormatted);
          setTotalUsuarios(userCount || 0);
          setTotalInmobiliarias(inmobiliariasData.length);
          setLoading(false);
        } catch (err) {
          console.error('Error:', err);
          setError('Error al cargar los datos');
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [activeSection]);

  const handleVerDetalles = (id: string) => {
    navigate(`/inmobiliaria/${id}`);
  };

  const handleDelete = async (id: string, nombre: string) => {
    if (window.confirm(`¿Estás seguro que deseas eliminar la inmobiliaria "${nombre}"?`)) {
      setDeleteError(null);
      setDeleteSuccess(null);
      
      const { error } = await deleteInmobiliaria(id);
      
      if (error) {
        setDeleteError(`Error al eliminar la inmobiliaria: ${error.message}`);
      } else {
        setDeleteSuccess(`Inmobiliaria "${nombre}" eliminada exitosamente`);
        setInmobiliarias(inmobiliarias.filter(i => i.id !== id));
      }
    }
  };

  const renderContent = () => {
    if (activeSection === 'vendedores') {
      return <UsersPanel />;
    }

    if (activeSection === 'inmobiliarias') {
      return (
        <>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <MetricCard 
              title="Total Inmobiliarias" 
              value={totalInmobiliarias.toString()}
              change={{ value: "", timeframe: "activas" }}
            />
            <MetricCard 
              title="Total Usuarios" 
              value={totalUsuarios.toString()} 
              change={{ value: "", timeframe: "registrados" }}
            />
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Listado de Inmobiliarias</h2>
              {deleteError && (
                <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                  {deleteError}
                </div>
              )}
              {deleteSuccess && (
                <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
                  {deleteSuccess}
                </div>
              )}
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center py-4">{error}</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nombre
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Usuarios
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {inmobiliarias.map(inmobiliaria => (
                        <tr key={inmobiliaria.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {inmobiliaria.nombre}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {inmobiliaria.total_usuarios}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex gap-4">
                              <button
                                onClick={() => handleVerDetalles(inmobiliaria.id)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Ver detalles
                              </button>
                              <button
                                onClick={() => handleDelete(inmobiliaria.id, inmobiliaria.nombre)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md mt-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Crear nueva Inmobiliaria</h2>
                {createError && (
                  <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                    {createError}
                  </div>
                )}
                {createSuccess && (
                  <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
                    {createSuccess}
                  </div>
                )}
                <form onSubmit={handleCreate} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Nombre:
                      <input
                        type="text"
                        value={newInmobiliaria.nombre}
                        onChange={(e) => setNewInmobiliaria({ nombre: e.target.value })}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Nombre de la inmobiliaria"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Crear Inmobiliaria
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <div className="flex">
      <Sidebar 
        onSectionChange={setActiveSection}
        activeSection={activeSection}
      />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DevPanel;