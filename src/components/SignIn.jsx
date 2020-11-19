import { Link } from 'react-router-dom';
import { apiSignIn } from '../backend';

const getToken = () => {
  console.log('la Pupa');
  apiSignIn('x@mail.com', '123');
};

const SignIn = () => (
  <div>
    <p>email:</p>
    <input type="email" />
    <p>password:</p>
    <input type="password" />
    <br />
    <button type="button" onClick={getToken}>Sign in</button>
    <Link to="/signup">Sign up</Link>
  </div>
);

export default SignIn;
