import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import tracks from './tracks';

const rootReducer = combineReducers({
  user,
  error,
  tracks,
});

export default rootReducer;
