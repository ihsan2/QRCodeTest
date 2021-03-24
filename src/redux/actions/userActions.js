import {getUsersAPI} from '../../api';

export const getUsers = () => {
  return dispatch => {
    dispatch({type: 'GET_USERS_START'});
    return getUsersAPI().then(resp => {
      dispatch({type: 'GET_USERS_SUCCESS', payload: resp});
      return resp;
    });
  };
};

export const setUser = data => {
  return dispatch => {
    return dispatch({type: 'SET_USER_LOGIN', payload: data});
  };
};

export const logout = () => {
  return dispatch => {
    return dispatch({type: 'LOGOUT', payload: null});
  };
};
