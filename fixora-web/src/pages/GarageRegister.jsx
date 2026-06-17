import { useState } from 'react';

function GarageRegister() {
  const [formData, setFormData] = useState({
    garageName: '',
    owner: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    licenseNumber: '',
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
    alert('Registration request submitted. Our team will review and contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Register Your Garage</h1>
          <p className="text-gray-600 text-lg">
            Join FIXORA and start accepting service requests from customers
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Garage Name</label>
              <input
                type="text"
                name="garageName"
                value={formData.garageName}
                onChange={handleChange}
                className="input-field"
                placeholder="Your garage name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Owner Name</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="input-field"
                placeholder="Full name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="garage@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Phone</label>
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
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Full Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
                placeholder="Street address"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select City</option>
                <option>Kathmandu</option>
                <option>Pokhara</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">License Number</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                className="input-field"
                placeholder="Business license number"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-3">
              Submit Registration Request
            </button>
          </form>

          <p className="text-gray-600 text-center mt-6 text-sm">
            Our team will review your application and contact you within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GarageRegister;
