import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex size-full flex-1 flex-col items-center justify-center text-black dark:text-white">
      <h1 className="-mt-4 text-9xl font-bold">🤷‍♂️</h1>
      <h2 className="mt-3 text-xl text-gray-800 dark:text-gray-300">
        Oops, page not found.
      </h2>
      <Link to="/" className="mt-3 text-xl font-medium underline">
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
