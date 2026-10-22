import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Looks like you wandered off the menu. Let's get you back.
      </p>
      <Link
        to="/"
        className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;