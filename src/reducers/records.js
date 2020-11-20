import { SET_RECORDS } from '../actions/index';

const records = (state = [], action) => {
  switch (action.type) {
    case SET_RECORDS:
      return action.records;
    default:
      return state;
  }
};

export default records;
