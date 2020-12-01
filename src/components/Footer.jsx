import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ user }) => {
  const { token } = user;
  const Content = () => {
    if (token === '') {
      return (
        <div className="footer-buttons" />
      );
    }
    return (
      <div className="footer-buttons">
        <Link to="/tracks" className="button">My Tracks</Link>
        <Link to="/add-track" className="button">Add Tracks</Link>
      </div>
    );
  };

  return (
    <div className="footer">
      <Content />
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
