import { SET_CURRENT_HASH } from '../actionTypes';

export default (state = {hash: null}, action) => {
  switch (action.type) {
    case SET_CURRENT_HASH:
      return action.hash;
    default:
      return state;
  }
};