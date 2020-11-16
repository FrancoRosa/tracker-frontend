import { Link } from 'react-router-dom';

const SignIn = () => (
  <div>
    <p>email:</p>
    <input type="email" />
    <p>password:</p>
    <input type="password" />
    <br />
    <button type="button">Sign in</button>
    <Link to="/signup">Sign up</Link>
  </div>
);

export default SignIn;
