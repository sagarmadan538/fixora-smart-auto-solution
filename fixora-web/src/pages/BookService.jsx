import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleNumber: "",
    service: "",
    priority: "Normal",
    pickupDrop: "No",
    pickupAddress: "",
    problemDescription: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.vehicleType ||
      !formData.vehicleNumber ||
      !formData.service
    ) {
      alert("Please fill required fields");
      return;
    }

    const bookings =
      JSON.parse(localStorage.getItem("fixoraBookings")) || [];

    const newBooking = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      bookingDate: new Date().toLocaleString(),
    };

    bookings.push(newBooking);

    localStorage.setItem(
      "fixoraBookings",
      JSON.stringify(bookings)
    );

    alert("Service booked successfully!");
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1>Book Vehicle Service</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "700px",
          marginTop: "20px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          name="vehicleType"
          placeholder="Vehicle Type"
          value={formData.vehicleType}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="text"
          name="service"
          placeholder="Service"
          value={formData.service}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#e53935",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book Service
        </button>
      </form>
    </div>
  );
}

export default BookService;