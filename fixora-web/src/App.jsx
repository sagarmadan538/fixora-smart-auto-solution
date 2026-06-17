import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import CustomerLogin from "./pages/CustomerLogin";
import GarageLogin from "./pages/GarageLogin";
import FounderLogin from "./pages/FounderLogin";

import CustomerDashboard from "./pages/CustomerDashboard";
import GarageDashboard from "./pages/GarageDashboard";
import FounderDashboard from "./pages/FounderDashboard";

import BookService from "./pages/BookService";
import AppointmentBook from "./pages/AppointmentBook";
import MyVehicles from "./pages/MyVehicles";
import GarageRegister from "./pages/GarageRegister";
import ServicesPage from "./pages/ServicesPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Logins */}
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/garage-login" element={<GarageLogin />} />
        <Route path="/founder-login" element={<FounderLogin />} />

        {/* Dashboards */}
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/garage-dashboard" element={<GarageDashboard />} />
        <Route path="/founder-dashboard" element={<FounderDashboard />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/appointment-book" element={<AppointmentBook />} />
        <Route path="/my-vehicles" element={<MyVehicles />} />
        <Route path="/garage-register" element={<GarageRegister />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;