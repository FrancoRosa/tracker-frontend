import { Link } from 'react-router-dom';

const SignUp = () => (
  <div>
    <p>name:</p>
    <input type="text" />
    <p>email:</p>
    <input type="email" />
    <p>password:</p>
    <input type="password" />
    <br />
    <button type="button">Sign up</button>
    <Link to="/signin">Sign in</Link>
  </div>
);

export default SignUp;
