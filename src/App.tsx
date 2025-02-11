import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RoleBasedRedirect from './RoleBasedRedirect';
import Login from './Login';
import AdminPanel from './panels/admin/AdminPanel';
import DevPanel from './panels/dev/DevPanel';
import UserPanel from './panels/user/UserPanel';
import UsersPanel from './panels/UsersPanel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <Routes>
        <Route path="/" element={<RoleBasedRedirect />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/dev" element={<DevPanel />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/usuarios" element={<UsersPanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
