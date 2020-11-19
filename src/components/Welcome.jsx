import { Link } from 'react-router-dom';

const Welcome = () => (
  <div>
    <Link to="/signin">Sign in</Link>
    <Link to="/signup">Sign up</Link>
  </div>
);

export default Welcome;
