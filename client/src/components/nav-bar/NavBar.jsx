import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="navBar">
        <div className="navContainer">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span className="logo">Booking Booking</span>
          </Link>
          {user ? (
            user.username
          ) : (
            <div className="navItems">
              <button className="navBtn">Register</button>
              <button className="navBtn">Login</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
