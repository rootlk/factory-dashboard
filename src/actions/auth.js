// auth actions
import axios from 'axios';
import history from '../helper/history';

export function userLoginProcess(email, password) {
  return (dispatch) => {
    dispatch(userLoginBegin())
    return axios
      .post('http://backend.sas.co.nz/api/login', { email, password })
      .then(response => {
        if (response.data.status_code !== 401) {
          const token = response.data.token;
          const user = response.data.user;
          dispatch(userLoginSuccess(token, user))
          localStorage.setItem('user_token', JSON.stringify(token))
          localStorage.setItem('user', JSON.stringify(user))
          history.push('/dashboard')
        } else {
          dispatch(userLoginFailure())
        }
      })
  }
};

export function userLogoutProcess() {
  return (dispatch) => {
    dispatch(userLogout())
    localStorage.removeItem('user_token')
    localStorage.removeItem('user')
  }
}

export const userLoginBegin = () => ({
  type: 'USER_LOGIN_BEGIN'
});

export const userLoginSuccess = (token, user) => ({
  type: 'USER_LOGIN_SUCCESS',
  token,
  user
});

export const userLoginFailure = () => ({
  type: 'USER_LOGIN_FAILURE',
});

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});