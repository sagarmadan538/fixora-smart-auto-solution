import { useState } from "react";
import servicesData from "../data/services";

function FounderDashboard() {
  const [services, setServices] = useState(servicesData);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [icon, setIcon] = useState("");

  const addService = () => {
    if (!title || !description) return;

    const newService = {
      id: Date.now(),
      title,
      description,
      price,
      icon,
    };

    setServices([...services, newService]);

    setTitle("");
    setDescription("");
    setPrice("");
    setIcon("");
  };

  const deleteService = (id) => {
    setServices(
      services.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-10">
        Founder Dashboard
      </h1>

      <div className="bg-gray-900 p-6 rounded-xl mb-10">
        <h2 className="text-2xl mb-4">
          Add New Service
        </h2>

        <input
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          placeholder="Service Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          placeholder="Price (NPR)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          placeholder="Emoji Icon (🔧 🚗 🛵)"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />

        <button
          onClick={addService}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded"
        >
          Add Service
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        Existing Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-900 p-5 rounded-xl"
          >
            <div className="text-4xl mb-3">
              {service.icon || "🔧"}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-400 mb-3">
              {service.description}
            </p>

            <p className="text-green-400 font-semibold mb-4">
              NPR {service.price}
            </p>

            <button
              onClick={() => deleteService(service.id)}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FounderDashboard;