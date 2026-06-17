import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">FIXORA</h3>
            <p className="text-gray-400">
              Nepal's Smart Vehicle Service Platform
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/book-service" className="hover:text-white">Services</Link></li>
              <li><Link to="/" className="hover:text-white">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">
              📧 info@fixora.com<br />
              📱 +977-1-XXXX-XXXX
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="text-center text-gray-500 text-sm">
          © 2026 FIXORA Smart Auto Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;