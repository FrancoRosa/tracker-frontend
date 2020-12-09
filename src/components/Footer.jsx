import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = ({ signed }) => {
  const Content = () => {
    if (!signed) {
      return (
        <div className="footer-buttons" />
      );
    }
    return (
      <div className="footer-buttons">
        <Link to="/tracks" className="button is-dark is-rounded">My Tracks</Link>
        <Link to="/addtrack" className="button is-dark is-rounded">Add Tracks</Link>
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
  signed: PropTypes.bool.isRequired,
};

export default Footer;
