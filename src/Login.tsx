import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from './auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Attempting to sign in with email:', email);
      const response = await signIn(email, password);
      console.log('Sign in response:', response);

      if (!response || !response.user) {
        setError('Error al iniciar sesión. Verifica tus credenciales.');
        return;
      }

      // Verificar que tengamos los datos necesarios
      if (!response.user.app_metadata?.role) {
        setError('Error: Usuario no tiene rol asignado');
        return;
      }

      console.log('Login successful, redirecting with role:', response.user.app_metadata.role);
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setError('Error inesperado al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-blue-600">DashStack</h1>
          <p className="text-gray-600 mt-2">Ingresa a tu cuenta</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </label>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </label>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded p-3">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
