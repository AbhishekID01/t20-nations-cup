import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

/**

 *
 * @returns {JSX.Element} The NotFound component.
 */
const NotFound = () => {
  const location = useLocation();

  // Log a console error when a non-existent route is accessed for debugging.
  useEffect(() => {
    console.error(
      `404 Error: User attempted to access non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    // Main container with a dark background and full viewport height
    <div className="min-h-screen flex items-center justify-center font-[inter] bg-zinc-900 text-white  p-6">
      <div className="text-center max-w-lg mx-auto flex flex-col items-center gap-6">
        <h1 className="text-8xl font-[Bebas_Neue] md:text-9xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          404
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-zinc-300">
          Uh oh, the page you're looking for can't be found.
        </p>

        <p className="text-base text-zinc-400">
          It looks like the link might be broken or the page no longer exists.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xs bg-emerald-500 text-zinc-800 font-[Bebas_Neue] text-2xl shadow-lg hover:bg-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 "
        >
          <Home className="h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
