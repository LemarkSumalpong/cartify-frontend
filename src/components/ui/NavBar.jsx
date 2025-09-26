import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

const NavBar = () => {
  return (
   <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md ">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4 font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div            
            >
             <button>Login</button>
             <button>register</button>
            </div>
            
          </ul>
        </div>
      </>
    </header>
  );
};

export default NavBar;
