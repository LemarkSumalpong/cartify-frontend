import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg/bg2.jpg';

const NotFound = () => {
  return (
    <header className="py-4 px-4">
      <img src={bg2} alt="" />
      <div className="container px-4 lg:px-4 py-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-semibold">Page not Found</h1>
          <p>
            We’re sorry, but the page you’re trying to access cannot be found.
            It may have been moved, deleted, or is currently unavailable. Please
            check the URL or return to the homepage.
          </p>
          <div className='py-6 px-2 md:py-6 lg:py-6'>
            {' '}
            <Link
              to="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NotFound;
