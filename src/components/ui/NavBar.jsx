import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Navlink from './Navlink';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md ">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex items-center font-semibold">
              <Link
                className="text-2xl text-white/90 items-center text-justify uppercase font-bold shadow-md"
                to="/"
              >
                <div className="bg-gray-900   px-3 py-1 rounded-md">
                  cartify
                </div>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <Navlink />
            </div>

            <div className="flex gap-4 font-semibold items-center">
              <Link to="/login">
                {' '}
                <button className="cursor-pointer hover:text-blue-500">
                  Login
                </button>
              </Link>
              
              <Link to="/register">
                <button className="cursor-pointer hover:text-blue-500">
                  Register
                </button>
              </Link>

              <Link
                to="/cart"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800"
              >
                <ShoppingCart size={20} className=" text-white" />
              </Link>
            </div>
          </ul>
        </div>
      </>
    </nav>
  );
};

export default NavBar;
