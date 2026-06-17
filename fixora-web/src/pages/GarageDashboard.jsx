import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function GarageDashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('fixoraBookings')) || [];
    setBookings(savedBookings);

    const pending = savedBookings.filter(b => b.status === 'Pending').length;
    const completed = savedBookings.filter(b => b.status === 'Completed').length;

    setStats({
      total: savedBookings.length,
      pending,
      completed,
    });
  }, []);

  const handleAccept = (id) => {
    const updatedBookings = bookings.map(b =>
      b.id === id ? { ...b, status: 'Accepted' } : b
    );
    setBookings(updatedBookings);
    localStorage.setItem('fixoraBookings', JSON.stringify(updatedBookings));
  };

  const handleComplete = (id) => {
    const updatedBookings = bookings.map(b =>
      b.id === id ? { ...b, status: 'Completed' } : b
    );
    setBookings(updatedBookings);
    localStorage.setItem('fixoraBookings', JSON.stringify(updatedBookings));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">
            Garage Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome back, {user?.name || 'Partner'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <h3 className="text-5xl font-bold mb-2">{stats.total}</h3>
            <p className="text-blue-100">Total Requests</p>
          </div>
          <div className="card bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <h3 className="text-5xl font-bold mb-2">{stats.pending}</h3>
            <p className="text-yellow-100">Pending Services</p>
          </div>
          <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
            <h3 className="text-5xl font-bold mb-2">{stats.completed}</h3>
            <p className="text-green-100">Completed</p>
          </div>
        </div>

        {/* Service Requests */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Service Requests</h2>

          {bookings.length === 0 ? (
            <p className="text-gray-600 py-8 text-center">
              No service requests yet. Check back later!
            </p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Booking ID</p>
                      <p className="font-bold">{booking.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Status</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'Accepted' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Date</p>
                      <p className="font-bold">{new Date(booking.bookingDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Time</p>
                      <p className="font-bold">{new Date(booking.bookingDate).toLocaleTimeString()}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {booking.status === 'Pending' && (
                      <button
                        onClick={() => handleAccept(booking.id)}
                        className="btn-secondary"
                      >
                        ✓ Accept
                      </button>
                    )}
                    {booking.status === 'Accepted' && (
                      <button
                        onClick={() => handleComplete(booking.id)}
                        className="btn-primary"
                      >
                        ✓ Mark Complete
                      </button>
                    )}
                    {booking.status === 'Completed' && (
                      <span className="text-green-600 font-bold">✓ Completed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GarageDashboard;