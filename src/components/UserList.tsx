import React, { useState } from 'react';
import { User, UpdateUserData, updateUser, deleteUser, Inmobiliaria } from '../api';

interface UserListProps {
  users: User[];
  inmobiliarias: Inmobiliaria[];
  onUserUpdated: (user: User) => void;
  onUserDeleted: (userId: string) => void;
}

const ROLES = ['user', 'admin', 'dev'];

export const UserList: React.FC<UserListProps> = ({ 
  users, 
  inmobiliarias, 
  onUserUpdated,
  onUserDeleted 
}) => {
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<UpdateUserData>({});
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (user: User) => {
    setEditingUserId(user.id);
    setEditForm({
      name: user.name,
      role: user.role,
      inmobiliaria_id: user.inmobiliaria_id
    });
    setError(null);
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setEditForm({});
    setError(null);
  };

  const handleSave = async (userId: string) => {
    try {
      const { data, error } = await updateUser(userId, editForm);
      if (error) {
        setError(`Error al actualizar: ${error.message}`);
      } else if (data) {
        onUserUpdated(data);
        setEditingUserId(null);
        setEditForm({});
        setError(null);
      }
    } catch (err) {
      setError('Error al actualizar el usuario');
    }
  };

  const handleDelete = async (userId: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      const { error } = await deleteUser(userId);
      if (error) {
        setError(`Error al eliminar: ${error.message}`);
      } else {
        onUserDeleted(userId);
        setError(null);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <table className="min-w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rol
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inmobiliaria
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
           <tr key={user.id}>
             <td className="border px-4 py-2">
               {editingUserId === user.id ? (
                 <input
                   type="text"
                   value={editForm.name || ''}
                   onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                   className="w-full p-1 border border-gray-300 rounded"
                 />
               ) : user.name}
             </td>
             <td className="border px-4 py-2">{user.email}</td>
             <td className="border px-4 py-2">
               {editingUserId === user.id ? (
                 <select
                   value={editForm.role || user.role || ''}
                   onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                   className="w-full p-1 border border-gray-300 rounded"
                 >
                   <option value="">Seleccione un rol</option>
                   {ROLES.map(role => (
                     <option key={role} value={role}>
                       {role}
                     </option>
                   ))}
                 </select>
               ) : user.role}
             </td>
             <td className="border px-4 py-2">
                {editingUserId === user.id ? (
                  <select
                    value={editForm.inmobiliaria_id || user.inmobiliaria_id || ''}
                    onChange={(e) => setEditForm({ ...editForm, inmobiliaria_id: e.target.value })}
                    className="w-full p-1 border border-gray-300 rounded"
                  >
                    <option value="">Seleccione una inmobiliaria</option>
                    {inmobiliarias.map(inmobiliaria => (
                      <option key={inmobiliaria.id} value={inmobiliaria.id}>
                        {inmobiliaria.nombre}
                      </option>
                    ))}
                  </select>
                ) : (
                  inmobiliarias.find(i => i.id === user.inmobiliaria_id)?.nombre || 'Sin inmobiliaria'
                )}
              </td>
              <td className="border px-4 py-2">
                {editingUserId === user.id ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(user.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={() => handleCancel()}
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
