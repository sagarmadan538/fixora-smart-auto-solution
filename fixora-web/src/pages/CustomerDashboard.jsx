import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function CustomerDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: '🚗', title: 'My Vehicles', count: '0', link: '/my-vehicles' },
    { icon: '📅', title: 'Service Booking', count: '0', link: '/book-service' },
    { icon: '⏰', title: 'Appointments', count: '0', link: '/appointment-book' },
    { icon: '📄', title: 'Invoices', count: '0', action: 'View Bills' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Welcome, {user?.name || 'Customer'}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Manage all your vehicle services in one place
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <Link
              key={idx}
              to={stat.link || '#'}
              className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{stat.count}</h3>
              <p className="text-blue-100">{stat.title}</p>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/book-service"
              className="btn-primary block text-center py-3"
            >
              📅 Book New Service
            </Link>
            <Link
              to="/appointment-book"
              className="btn-accent block text-center py-3"
            >
              🕐 Schedule Appointment
            </Link>
            <Link
              to="/my-vehicles"
              className="btn-secondary block text-center py-3"
            >
              🚗 Manage Vehicles
            </Link>
          </div>
        </div>

        {/* Recent Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Recent Services</h2>
          <p className="text-gray-600">
            No services booked yet. <Link to="/book-service" className="text-red-600 font-bold hover:text-red-700">
              Book your first service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;