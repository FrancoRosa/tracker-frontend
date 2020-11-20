import { combineReducers } from 'redux';
import user from './user';
import error from './error';
import tracks from './tracks';
import track from './track';
import records from './records';

const rootReducer = combineReducers({
  user,
  error,
  tracks,
  track,
  records,
});

export default rootReducer;
