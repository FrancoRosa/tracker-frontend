import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ signed, name }) => {
  const Content = () => {
    if (signed) {
      return (
        <div className="navbar-links">
          <Link to="/signin" className="button">Sign in</Link>
          <Link to="/signup" className="button">Sign up</Link>
        </div>
      );
    }
    return (
      <div className="navbar-links">
        <h2 className="navbar-item is-title is-2 has-text-white">{`Hello ${name}`}</h2>
        <Link to="/signout" className="button">Sign Out</Link>
      </div>
    );
  };

  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h2 className="title is-3 has-text-white">Tracker</h2>
        </div>
      </div>
      <Content />
    </nav>
  );
};

Navbar.propTypes = {
  signed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navbar;
