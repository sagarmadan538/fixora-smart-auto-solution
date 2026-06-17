import services from "../data/services";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-400 font-semibold tracking-widest uppercase text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Motorcycle & Scooter Services
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Professional maintenance, repair and replacement services
            for motorcycles and scooters with transparent pricing,
            warranty and expert technicians.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >

              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-400 mb-5 min-h-[70px]">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-5">

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">
                      Service Time
                    </span>
                    <span className="font-medium">
                      {service.duration}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">
                      Warranty
                    </span>
                    <span className="font-medium text-green-400">
                      {service.warranty}
                    </span>
                  </div>

                </div>

                {/* Features */}
                {service.features && (
                  <div className="mb-5">
                    <p className="text-sm text-slate-400 mb-2">
                      Includes:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((item, index) => (
                        <span
                          key={index}
                          className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400">
                    Starting Price
                  </span>

                  <span className="font-bold text-red-400 text-xl">
                    {service.price}
                  </span>
                </div>

                {/* Button */}
                <Link
                  to="/book-service"
                  className="block text-center w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Book Service
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;