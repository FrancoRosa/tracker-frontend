import { ERASE_TOKEN, SET_USER } from '../actions/index';

const user = (state = { name: '', token: '', email: '' }, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case ERASE_TOKEN:
      return { ...state, token: '' };
    default:
      return state;
  }
};

export default user;
