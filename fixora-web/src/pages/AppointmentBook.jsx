import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function AppointmentBook() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    appointmentDate: '',
    appointmentTime: '',
    service: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
      alert('Please fill all required fields');
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('fixoraAppointments')) || [];
    const newAppointment = {
      id: Date.now(),
      customerId: user?.id,
      ...formData,
      status: 'Pending',
      createdDate: new Date().toLocaleString(),
    };

    appointments.push(newAppointment);
    localStorage.setItem('fixoraAppointments', JSON.stringify(appointments));

    alert('Appointment booked successfully! You will receive a confirmation call.');
    navigate('/customer-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-custom max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-gray-600">Schedule a service appointment with our garage partners</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Your name"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="98XXXXXXXX"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select service</option>
              <option>General Service</option>
              <option>Standard Service</option>
              <option>Silver Service</option>
              <option>Gold Service</option>
              <option>Diamond Service</option>
            </select>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Appointment Date *</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Appointment Time *</label>
              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 font-bold mb-2">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="input-field"
              rows="4"
              placeholder="Any special requests or details..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-accent w-full text-lg py-3">
            Confirm Appointment
          </button>

          <p className="text-gray-600 text-sm text-center">
            We'll call you to confirm the appointment details.
          </p>
        </form>
      </div>
    </div>
  );
}

export default AppointmentBook;