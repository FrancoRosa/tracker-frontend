import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Tracks from './Tracks';
import Welcome from './Welcome';

const App = () => (
  <Switch>
    <Route path="/tracks" component={Tracks} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/" component={Welcome} />
  </Switch>
);

export default App;
