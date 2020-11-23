import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ user }) => {
  const { token, name } = user;
  if (token === '') {
    return (
      <div>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }
  return (
    <div>
      Hello
      {name}
      <Link to="/signout">Sign Out</Link>
    </div>
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
