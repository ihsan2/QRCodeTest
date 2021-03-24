const initialState = {
  loading: false,
  users: null,
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS_START':
      return {...state};
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
      };
    case 'GET_USERS_FAIL':
      return initialState;
    case 'SET_USER_LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
      };
  }

  return state;
}
