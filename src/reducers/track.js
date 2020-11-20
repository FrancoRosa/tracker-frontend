import { SET_TRACK } from '../actions/index';

const track = (state = 0, action) => {
  switch (action.type) {
    case SET_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default track;
