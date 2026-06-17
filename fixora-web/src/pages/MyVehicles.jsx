import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

function MyVehicles() {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState([
    { id: 1, type: 'Bike', number: 'BA1234', year: 2022 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: 'Bike',
    number: '',
    year: new Date().getFullYear(),
  });

  const handleAdd = () => {
    if (formData.number) {
      setVehicles([...vehicles, {
        id: Date.now(),
        ...formData,
      }]);
      setFormData({ type: 'Bike', number: '', year: new Date().getFullYear() });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Vehicles</h1>

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
      >
        <option value="">Vehicle Type</option>
        <option>Bike</option>
        <option>Scooter</option>
        <option>Car</option>
      </select>

      <br /><br />

      <input
        name="brand"
        placeholder="Brand"
        value={form.brand}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="model"
        placeholder="Model"
        value={form.model}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="number"
        placeholder="Vehicle Number"
        value={form.number}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={addVehicle}>
        Add Vehicle
      </button>

      <hr />

      <h2>My Vehicle List</h2>

      {vehicles.map((v, index) => (
        <div key={index}>
          {v.type} | {v.brand} | {v.model} | {v.number}
        </div>
      ))}
    </div>
  );
}

export default MyVehicles;