import PropTypes from 'prop-types';

const Welcome = ({ signed, name }) => {
  if (signed) {
    return (
      <div className="card">
        <h2 className="has-text-centered title is-3">{`Welcome ${name}`}</h2>
        <p className="has-text-centered">Add a new record to your tracks, or add a new track </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 className="has-text-centered title is-3">Welcome</h2>
      <p className="has-text-centered">To use the app, please signin or signup.</p>
    </div>
  );
};

Welcome.propTypes = {
  signed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Welcome;
