import { SET_ERROR } from '../actions/index';

const error = (state = '', action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default error;
