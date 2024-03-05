import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex size-full flex-col items-center justify-center text-black dark:text-white">
      <h1 className="-mt-12 text-7xl font-bold">Oops</h1>
      <h2 className="mt-3 text-xl text-gray-800 dark:text-gray-300">
        Page not found.
      </h2>
      <Link to="/" className="mt-3 text-xl font-medium underline">
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
