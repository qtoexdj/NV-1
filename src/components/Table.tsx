import React from 'react';

interface TableProps {
  data: { id: string; name: string; email: string }[];
  onDeleteUser: (id: string) => Promise<void>;
}

const Table: React.FC<TableProps> = ({ data, onDeleteUser }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Usuarios</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => onDeleteUser(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => {/* TODO: Implementar ver detalles */}}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
