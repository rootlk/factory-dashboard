import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore';
import Root from './root/Root';
//import { saveToLocalStorage } from './store/configureStore'
import { userLoginSuccess } from './actions/auth';
import 'bulma/css/bulma.min.css';
import './css/app.css';
import 'react-day-picker/lib/style.css';


// store.subscribe(() => saveToLocalStorage(store.getState()))

const token = JSON.parse(localStorage.getItem('user_token'));
const user = JSON.parse(localStorage.getItem('user'))

if (token && user) {
  store.dispatch(userLoginSuccess(token, user))
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
