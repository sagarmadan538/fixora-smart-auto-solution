import React from "react";

function ServicesPage() {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Our Service Packages
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>General Service</h3>
          <p>Basic maintenance package</p>
          <h4>Rs. 350</h4>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>Standard Service</h3>
          <p>Regular service package</p>
          <h4>Rs. 700</h4>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>Silver Service</h3>
          <p>Advanced maintenance package</p>
          <h4>Rs. 1200</h4>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>Gold Service</h3>
          <p>Premium vehicle care</p>
          <h4>Rs. 1800</h4>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "250px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <h3>Diamond Service</h3>
          <p>Complete inspection & care</p>
          <h4>Rs. 2500</h4>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;