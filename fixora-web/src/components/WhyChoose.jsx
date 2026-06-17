function WhyChoose() {
  const features = [
    { icon: "🏆", title: "Trusted Partner Garages" },
    { icon: "📋", title: "Digital Service Records" },
    { icon: "💰", title: "Transparent Pricing" },
    { icon: "🚗", title: "Pickup & Drop Service" },
    { icon: "📍", title: "Real-Time Service Tracking" },
    { icon: "✅", title: "Warranty Support" },
  ];

  const stats = [
    { number: "500+", label: "Customers" },
    { number: "50+", label: "Partner Garages" },
    { number: "5000+", label: "Services Completed" },
    { number: "4.9★", label: "Average Rating" },
  ];

  return (
    <>
      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-16">
            Trusted By Vehicle Owners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose FIXORA?
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
            Making vehicle maintenance simple, transparent and reliable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose;