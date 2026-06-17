import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-300">
            Nepal's Smart Automotive Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Smart Vehicle
          <span className="block text-red-500">
            Service Management
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-12">
          Book trusted garages, schedule repairs, track service history
          and manage your vehicle maintenance from one modern platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">

          <Link
            to="/book-service"
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Book Service
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center min-w-[220px] px-10 py-4 rounded-2xl border border-slate-500 hover:border-white text-white font-semibold transition-all duration-300"
          >
            Explore Services
          </Link>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold text-lg mb-2">
              Trusted Garages
            </h3>
            <p className="text-slate-400 text-sm">
              Connect with verified automotive service providers.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-2">
              Easy Booking
            </h3>
            <p className="text-slate-400 text-sm">
              Schedule appointments online in just a few clicks.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="text-3xl mb-3">🏍️</div>
            <h3 className="font-bold text-lg mb-2">
              Vehicle Records
            </h3>
            <p className="text-slate-400 text-sm">
              Maintain complete maintenance history digitally.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;