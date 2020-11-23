import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Tracks from './Tracks';
import Records from './Records';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Footer from './Footer';
import SignOut from './SignOut';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/tracks/:id" component={Records} />
      <Route path="/tracks" component={Tracks} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
      <Route path="/" component={Welcome} />
    </Switch>
    <Footer />
  </div>
);

export default App;
