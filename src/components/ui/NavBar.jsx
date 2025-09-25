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
              className=
                "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 "

                
                 
            >
              <li>
                <Link to={'/login'}>Sign</Link>
              </li>
              <li>
                <Link to="/my-account" >My Account</Link>
              </li>
              <User />
            </div>
            
          </ul>
        </div>
        <nav className="flex justify-between items-center container mx-auto py-2 ">
          <div className="flex items-center">
            <Link to="/" className=" py-2 px-4 rounded">
              <img src={''} alt="PeakStore logo" className="h-12 w-auto" />
            </Link>
          </div>
          <form className="w-1/2  sm:block hidden">
            <input
              type="text"
              placeholder="Search Product..."
              className="bg-zinc-100100 rounded-md border borders-zinc-100 focus:outline-none py-3 px-3 w-full"
              
            />
          </form>
          <div className="relative">
            <Link to={'/cart'}>
              <ShoppingCart
                size={50}
                className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
              />
              
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                
                </span>
             
            </Link>
          </div>
        </nav>
      </>
    </header>
  );
};

export default NavBar;
