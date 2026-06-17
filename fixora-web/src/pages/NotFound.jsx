import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-600 to-red-800 text-white">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <h2 className="text-4xl mb-4">Page Not Found</h2>
      <p className="text-xl mb-8 text-gray-200">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn-secondary px-8 py-3">
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
