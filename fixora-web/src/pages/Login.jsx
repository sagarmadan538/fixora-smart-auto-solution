import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    // Dummy authentication - in real app, validate against backend
    if (email && password) {
      const user = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        role: 'customer',
      };

      login(user);
      navigate('/customer-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
          FIXORA Login
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-lg">
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-red-600 font-bold hover:text-red-700">
              Register here
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm mb-4">Or login as:</p>
          <div className="space-y-3">
            <Link
              to="/customer-login"
              className="btn-secondary block text-center"
            >
              Customer Login
            </Link>
            <Link
              to="/garage-login"
              className="btn-secondary block text-center"
            >
              Garage Partner Login
            </Link>
            <Link
              to="/founder-login"
              className="btn-secondary block text-center"
            >
              Founder Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;