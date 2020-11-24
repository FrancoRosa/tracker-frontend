import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ user }) => {
  const { token, name } = user;
  const Content = () => {
    if (token === '') {
      return (
        <div className="navbar-item">
          <Link to="/signin" className="navbar-item">Sign in</Link>
          <Link to="/signup" className="navbar-item">Sign up</Link>
        </div>
      );
    }
    return (
      <div className="navbar-item">
        Hello
        {' '}
        {name}
        <Link to="/signout" className="navbar-item">Sign Out</Link>
      </div>
    );
  };

  return (
    <nav className="navbar is-primary is-expanded">
      <div className="navbar-brand">
        <div className="navbar-item">
          <h2 className="title is-3 has-text-white">Tracker</h2>
        </div>
        <Content />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Navbar);
