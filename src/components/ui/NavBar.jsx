import { ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md ">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4 font-semibold">
              <Link className="text-2xl uppercase font-bold" to="/">
                cartify
              </Link>
            </div>
            <div className="flex gap-4 font-semibold ">
              <button>Login</button>
              <button>register</button>
              <Link to="/cart" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800">
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
