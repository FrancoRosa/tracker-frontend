import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ user }) => {
  const { token } = user;
  if (token === '') {
    return (
      <div>
        {' - - - - '}
      </div>
    );
  }
  return (
    <div>
      <Link to="/tracks">Tracks</Link>
      <Link to="/tracks">Tracks</Link>
    </div>
  );
};

Footer.propTypes = {
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);
