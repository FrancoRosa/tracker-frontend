import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { eraseToken } from '../actions';

const SignOut = ({ user, eraseToken }) => {
  useEffect(() => {
    eraseToken();
  }, []);

  return (
    <div>
      We will miss you
      {' '}
      {user.name}
    </div>
  );
};

SignOut.propTypes = {
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  eraseToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  eraseToken: () => dispatch(eraseToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
