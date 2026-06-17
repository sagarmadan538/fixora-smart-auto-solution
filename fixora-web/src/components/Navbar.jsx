import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 border-b border-blue-900/50 backdrop-blur-md shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="FIXORA"
              className="h-14 w-14 rounded-full border-2 border-red-500 object-cover"
            />

            <div>
              <h1 className="text-3xl font-extrabold text-red-500 tracking-wide">
                FIXORA
              </h1>

              <p className="text-xs text-slate-300 tracking-widest uppercase">
                Smart Auto Solution
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-slate-200 font-medium">

            <Link
              to="/"
              className="hover:text-red-400 transition"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-red-400 transition"
            >
              Services
            </Link>

            <Link
              to="/garage-register"
              className="hover:text-red-400 transition"
            >
              Partner Garages
            </Link>

            <Link
              to="/book-service"
              className="hover:text-red-400 transition"
            >
              Book Service
            </Link>

          </div>

          <div className="flex items-center gap-3">

            <div className="relative">

              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:scale-105 transition px-5 py-2.5 rounded-xl text-white font-semibold shadow-lg"
              >
                Login
              </button>

              {loginOpen && (
                <div className="absolute right-0 mt-3 w-60 bg-white rounded-xl shadow-2xl overflow-hidden">

                  <Link
                    to="/customer-login"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Customer Login
                  </Link>

                  <Link
                    to="/garage-login"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Garage Login
                  </Link>

                  <Link
                    to="/garage-register"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Register Garage
                  </Link>

                  <Link
                    to="/founder-login"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Founder Login
                  </Link>

                  <Link
                    to="/register"
                    className="block px-5 py-3 border-t hover:bg-gray-100"
                  >
                    Create Account
                  </Link>

                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-3xl"
            >
              ☰
            </button>

          </div>

        </nav>
      </header>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-72 bg-slate-950 text-white z-50 p-6 shadow-2xl">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-red-500">
                FIXORA
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-5">

              <Link to="/">Home</Link>

              <Link to="/services">
                Services
              </Link>

              <Link to="/garage-register">
                Partner Garages
              </Link>

              <Link to="/book-service">
                Book Service
              </Link>

              <Link to="/my-vehicles">
                My Vehicles
              </Link>

            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Navbar;