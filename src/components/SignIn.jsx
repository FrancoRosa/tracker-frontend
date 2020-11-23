import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setUser, setError } from '../actions';
import { API_URL } from '../backend';

const SignIn = ({
  user,
  error,
  setUser,
  setError,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiSignIn = async () => {
    const obj = {
      user: {
        email,
        password,
      },
    };
    const { data: response } = await axios.post(`${API_URL}signin`, obj);
    if (response.name) {
      setUser(response);
    } else {
      setError(response.error);
    }
  };

  useEffect(() => {
    setError('');
  }, []);

  return (
    <div>
      <p>{user.name}</p>
      <p>email:</p>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <p>password:</p>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      {error ? <p>{error}</p> : null}
      <button type="button" onClick={apiSignIn}>Sign in</button>
      <br />
      <Link to="/signup">Sign up</Link>
      <Link to="/tracks">Tracks</Link>
    </div>
  );
};

SignIn.propTypes = {
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
  error: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
