import React, { useState } from 'react';
import { Sidebar, Header } from '../../components';

const UserPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'dashboard'>('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        onSectionChange={(section: any) => setActiveSection(section)} 
        activeSection={activeSection} 
      />
      <div className="flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-auto h-[calc(100vh-64px)]">
          <h1 className="text-2xl font-bold mb-6">Panel de Usuario</h1>
          {/* Contenido del panel de usuario */}
        </main>
      </div>
    </div>
  );
};

export default UserPanel;