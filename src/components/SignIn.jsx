import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { apiSignIn } from '../backend';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = () => {
    apiSignIn(email, password);
  };

  return (
    <div>
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
      <button type="button" onClick={signin}>Sign in</button>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

export default SignIn;
