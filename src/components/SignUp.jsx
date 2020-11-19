import { Link } from 'react-router-dom';
import { apiSignUp } from '../backend';

const createUser = () => {
  console.log('la Pupa');
  apiSignUp('x', 'x@mail.com', '123');
};

const SignUp = () => (
  <div>
    <p>name:</p>
    <input type="text" />
    <p>email:</p>
    <input type="email" />
    <p>password:</p>
    <input type="password" />
    <br />
    <button type="button" onClick={createUser}>Sign up</button>
    <Link to="/signin">Sign in</Link>
  </div>
);

export default SignUp;
