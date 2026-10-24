import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">404</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">Oops! Page not found</p>
        <a href="/" className="mt-4 inline-flex min-h-[44px] items-center text-blue-500 underline transition-colors hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
