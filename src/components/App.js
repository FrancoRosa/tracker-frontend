import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Tracks from './Tracks';
import Records from './Records';
import Welcome from './Welcome';
import Navbar from './Navbar';
import Footer from './Footer';
import SignOut from './SignOut';
import AddTrack from './AddTrack';

const App = ({ user }) => {
  const { token, name } = user;
  const signed = token !== '';
  return (
    <div>
      <Navbar signed={signed} name={name} />
      <Switch className="center">
        <Route path="/tracks/:id" component={Records} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/addtrack" component={AddTrack} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route
          path="/"
          render={() => <Welcome signed={signed} name={name} />}
        />
      </Switch>
      <Footer signed={signed} />
    </div>
  );
};

App.propTypes = {
  user: PropTypes.shape(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
