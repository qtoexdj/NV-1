import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface SidebarProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSectionChange, activeSection }) => {
  const navigate = useNavigate();
  
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'vendedores', label: 'Vendedores', icon: '👥' },
    { id: 'prospectos', label: 'Prospectos', icon: '📋' },
    { id: 'inmobiliarias', label: 'Inmobiliarias', icon: '🏢' },
  ];

  const profileItems = [
    { id: 'perfil', label: 'Mi Perfil', icon: '👤' },
    { id: 'configuracion', label: 'Configuración', icon: '⚙️' },
  ];

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg h-screen flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">NV-Inmobiliaria</h2>
      </div>
      
      {/* Menú principal */}
      <nav className="flex-grow p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full px-4 py-2 flex items-center space-x-2 rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Separador */}
        <div className="my-4 border-t border-gray-200"></div>

        {/* Perfil y configuración */}
        <div className="space-y-2">
          {profileItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full px-4 py-2 flex items-center space-x-2 rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Cerrar sesión */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 flex items-center space-x-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <span className="text-lg">🚪</span>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
