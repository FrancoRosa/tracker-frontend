import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { apiSignUp } from '../backend';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    apiSignUp(name, email, password);
  };

  return (
    <div>
      <p>name:</p>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
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
      <button type="button" onClick={signup}>Sign up</button>
      <br />
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

export default SignUp;
