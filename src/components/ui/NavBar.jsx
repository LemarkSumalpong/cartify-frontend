import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <Link>CARTIFY</Link>
        <button type="button">
            <span>Button</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
