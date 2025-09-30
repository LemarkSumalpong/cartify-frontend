import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg/bg2.jpg';

const NotFound = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center">
      <img
        src={bg2}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-semibold">Page not Found</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          We’re sorry, but the page you’re trying to access cannot be found.
          It may have been moved, deleted, or is currently unavailable. Please
          check the URL or return to the homepage.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Home
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NotFound;
