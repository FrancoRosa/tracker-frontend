import { SET_TRACKS } from '../actions/index';

const tracks = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default tracks;
