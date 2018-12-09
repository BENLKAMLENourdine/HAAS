import API from '../../services/api';
import { SET_CURRENT_HASH } from '../actionTypes';
import { addError, removeError } from './error';


export const setCurrentHash = hash => ({
  type: SET_CURRENT_HASH,
  hash,
});

export const createHash = data => {
  return async dispatch => {
    try {
      const hash = await API.call('post', 'calculateHash', data);
      dispatch(setCurrentHash(hash));
      dispatch(removeError());
    } catch (err) {
      const { error } = err.response.data;
      dispatch(addError(error));
    }
  };
};

