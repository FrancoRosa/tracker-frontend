import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setUser, setError } from '../actions';
import { API_URL } from '../backend';

const SignUp = ({
  error,
  setUser,
  setError,
  history,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiSignUp = async () => {
    const obj = {
      user: {
        name,
        email,
        password,
      },
    };
    const { data: response } = await axios.post(`${API_URL}signup`, obj);
    if (response.name) {
      setUser(response);
      history.push('/');
    } else {
      setError(response.error);
    }
  };

  useEffect(() => {
    setError('');
  }, []);

  return (
    <div className="card has-text-centered">
      <input
        className="input is-rounded "
        type="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type your name here"
      />
      <input
        className="input is-rounded "
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Type your email"
      />
      <input
        className="input is-rounded "
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Type your password"
      />
      <br />
      {error ? <p className="has-text-danger">{error}</p> : null}
      <button
        className="button"
        type="button"
        onClick={apiSignUp}
      >
        Sign Up
      </button>
    </div>
  );
};

SignUp.propTypes = {
  error: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  history: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setError: error => dispatch(setError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
