import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { getUserRole } from '../auth';

const Header: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'admin' | 'user' | 'dev' | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('name')
          .eq('id', user.id)
          .single();
        
        if (!error && userData) {
          setUserName(userData.name);
        }

        const role = await getUserRole();
        setUserRole(role);
      }
    };

    getUser();
  }, []);

  const getPanelText = () => {
    switch (userRole) {
      case 'admin':
        return 'Panel de Administrador';
      case 'dev':
        return 'Panel Desarrollador';
      case 'user':
        return 'Panel de Usuario';
      default:
        return 'Panel';
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 font-bold">{getPanelText()}</span>
      </div>
      <div className="flex items-center space-x-2">
        <img 
          src="/vite.svg" 
          alt="User" 
          className="w-10 h-10 rounded-full"
        />
        <span className="text-gray-600">{userName}</span>
      </div>
    </header>
  );
};

export default Header;
