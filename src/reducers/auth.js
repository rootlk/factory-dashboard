// auth reducer
const authReducerDefaultState = {
  auth_id: '',
  user: {},
  status: ''
};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_BEGIN':
      return {
        status: 'loading'
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        auth_id: action.token,
        user: action.user,
        status: 'success'
      };
    case 'USER_LOGIN_FAILURE':
      return {
        status: 'error'
      };
    case 'USER_LOGOUT':
      return {
        auth_id: '',
        user: {},
      }
    default:
      return state;
  }
};