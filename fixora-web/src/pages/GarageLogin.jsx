import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function GarageLogin() {
  const [garageName, setGarageName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!garageName || !email || !password) {
      setError('Please fill all fields');
      return;
    }

    const user = {
      id: Date.now(),
      name: garageName,
      email,
      role: 'garage',
    };

    login(user);
    navigate('/garage-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          Garage Partner Login
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Manage your garage services and appointments
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Garage Name</label>
            <input
              type="text"
              value={garageName}
              onChange={(e) => setGarageName(e.target.value)}
              className="input-field"
              placeholder="Your garage name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="garage@email.com"
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

          <button type="submit" className="btn-secondary w-full text-lg">
            Login as Garage
          </button>
        </form>
      </div>
    </div>
  );
}

export default GarageLogin;