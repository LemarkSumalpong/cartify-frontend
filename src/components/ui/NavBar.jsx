import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md ">
          <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            <div className="flex gap-4 font-semibold">
             <h1 className='text-2xl uppercase font-bold'>Cartify</h1>
            </div>
            <div className="flex gap-4 font-semibold ">
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
