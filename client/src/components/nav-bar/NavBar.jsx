import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="navContainer">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span className="logo">Booking Booking</span>
          </Link>
          <div className="navItems">
            <button className="navBtn">Register</button>
            <button className="navBtn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
