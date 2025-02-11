import React, { useState, ReactElement } from 'react';
import { Sidebar, Header } from '../../components';
import { DashboardPanel, ProspectosPanel, VendedoresPanel } from '..';
import { getPublicUser, checkUserClaims } from '../../auth';
import { supabase } from '../../supabaseClient';

type SectionType = 'dashboard' | 'prospectos' | 'vendedores';

const AdminPanel: React.FC = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<SectionType>('dashboard');

  React.useEffect(() => {
    const verificarPermisos = async () => {
      try {
        const claims = await checkUserClaims();
        console.log('User claims:', claims);
        
        const publicUser = await getPublicUser();
        console.log('Public user:', publicUser);
        
        if (!publicUser || !publicUser.inmobiliaria_id) {
          throw new Error('No se pudo obtener el ID de inmobiliaria del usuario');
        }
  
        // Verificar permisos antes de mostrar el panel
        const permTest = await supabase
          .from('users')
          .select('id')
          .limit(1);
        console.log('Permission test:', permTest);

      } catch (err) {
        setError('Error al verificar permisos');
        console.error('AdminPanel error:', err);
      } finally {
        setLoading(false);
      }
    };
  
    verificarPermisos();
  }, []);

  const handleSectionChange = (section: string) => {
    // Validar que la sección sea uno de los valores permitidos
    if (section === 'dashboard' || section === 'prospectos' || section === 'vendedores') {
      setActiveSection(section);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      );
    }

    if (error) {
      return <div className="text-red-500 text-center p-6">{error}</div>;
    }

    switch (activeSection) {
      case 'dashboard':
        return <DashboardPanel />;
      case 'prospectos':
        return <ProspectosPanel />;
      case 'vendedores':
        return <VendedoresPanel />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onSectionChange={handleSectionChange} activeSection={activeSection} />
      <div className="flex-1 overflow-hidden">
        <Header />
        <main className="p-6 overflow-auto h-[calc(100vh-64px)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;