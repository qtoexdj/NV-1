import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Sidebar, Header, UserList } from '../components';
import { User, getAllUsers, createUser, Inmobiliaria } from '../api';

interface NewUser {
  name: string;
  email: string;
  password: string;
  role: string;
  inmobiliaria_id: string;
}

interface CurrentUser extends Omit<User, 'inmobiliaria'> {
  inmobiliaria: Inmobiliaria | null;
}

const UsersPanel: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [inmobiliarias, setInmobiliarias] = useState<{ id: string; nombre: string }[]>([]);
  const [newUser, setNewUser] = useState<NewUser>({ 
    name: '', 
    email: '', 
    password: '', 
    role: 'user',
    inmobiliaria_id: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedInmobiliariaFilter, setSelectedInmobiliariaFilter] = useState<string>('');
  const [activeSection, setActiveSection] = useState('usuarios');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener el usuario actual y sus datos
        const { data: { user: authUser } } = await supabase.auth.getUser();
        if (!authUser) {
          setError('No se pudo obtener la información del usuario');
          return;
        }

        // Obtener datos completos del usuario
        const { data: userData } = await supabase
          .from('users')
          .select('*, inmobiliaria:inmobiliarias!inmobiliaria_id(id, nombre)')
          .eq('id', authUser.id)
          .single();

        if (!userData) {
          setError('No se pudo obtener los datos del usuario');
          return;
        }

        setCurrentUser(userData);

        // Si es admin, solo obtener inmobiliarias del usuario
        const inmobiliariasQuery = userData.role === 'admin'
          ? supabase
              .from('inmobiliarias')
              .select('id, nombre')
              .eq('id', userData.inmobiliaria_id)
          : supabase
              .from('inmobiliarias')
              .select('id, nombre');

        const [usersData, inmobiliariasData] = await Promise.all([
          getAllUsers(userData),
          inmobiliariasQuery
        ]);

        if (inmobiliariasData.error) throw inmobiliariasData.error;
        
        setUsers(usersData);
        setInmobiliarias(inmobiliariasData.data || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error al cargar los datos');
      }
    };

    fetchData();
  }, []);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (!currentUser) {
        setError('No se pudo verificar los permisos del usuario');
        return;
      }

      // Validar que todos los campos estén completos
      if (!newUser.name || !newUser.email || !newUser.password || !newUser.role || !newUser.inmobiliaria_id) {
        setError('Todos los campos son requeridos');
        return;
      }

      // Validar permisos y restricciones
      if (currentUser.role === 'admin') {
        if (newUser.inmobiliaria_id !== currentUser.inmobiliaria_id) {
          setError('Solo puedes crear usuarios para tu propia inmobiliaria');
          return;
        }
        if (newUser.role === 'dev') {
          setError('No tienes permisos para crear usuarios desarrolladores');
          return;
        }
      } else if (currentUser.role !== 'dev') {
        setError('No tienes permisos para crear usuarios');
        return;
      }

      const { data: userData, error: createError } = await createUser(newUser);

      if (createError) {
        setError(`Error al crear usuario: ${createError.message}`);
        return;
      }

      if (userData) {
        setUsers(prevUsers => [...prevUsers, userData]);
        setNewUser({
          name: '',
          email: '',
          password: '',
          role: 'user',
          inmobiliaria_id: ''
        });
        setSuccess('Usuario creado exitosamente');
        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (err) {
      setError('Error inesperado al crear el usuario');
      console.error(err);
    }
  };

  const handleUserUpdated = (updatedUser: User) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setSuccess('Usuario actualizado exitosamente');
    setTimeout(() => setSuccess(null), 3000);
  };

  const handleUserDeleted = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    setSuccess('Usuario eliminado correctamente');
    setTimeout(() => setSuccess(null), 3000);
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
          <div className="mb-8">
            {currentUser?.role === 'dev' && (
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <label className="block text-gray-700">
                  Filtrar por Inmobiliaria:
                  <select
                    value={selectedInmobiliariaFilter}
                    onChange={(e) => setSelectedInmobiliariaFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  >
                    <option value="">Todas las inmobiliarias</option>
                    {inmobiliarias.map(inmobiliaria => (
                      <option key={inmobiliaria.id} value={inmobiliaria.id}>
                        {inmobiliaria.nombre}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}
            <UserList
              users={selectedInmobiliariaFilter
                ? users.filter(user => user.inmobiliaria_id === selectedInmobiliariaFilter)
                : users}
              inmobiliarias={inmobiliarias}
              onUserUpdated={handleUserUpdated}
              onUserDeleted={handleUserDeleted}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Crear nuevo Usuario</h2>
            {error && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 rounded-lg">
                {success}
              </div>
            )}
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Nombre:
                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Correo:
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Contraseña:
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Inmobiliaria:
                  <select
                    value={newUser.inmobiliaria_id}
                    onChange={(e) => setNewUser({ ...newUser, inmobiliaria_id: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  >
                    <option value="">Selecciona una inmobiliaria</option>
                    {inmobiliarias.map(inmobiliaria => (
                      <option key={inmobiliaria.id} value={inmobiliaria.id}>
                        {inmobiliaria.nombre}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Rol:
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    disabled={currentUser?.role === 'admin'} // Los admin no pueden cambiar el rol
                  >
                    <option value="user">Usuario</option>
                    <option value="admin">Administrador</option>
                    {currentUser?.role === 'dev' && (
                      <option value="dev">Desarrollador</option>
                    )}
                  </select>
                </label>
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Crear Usuario
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPanel;
