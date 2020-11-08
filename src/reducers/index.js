import { combineReducers } from 'redux';
import authReducer from './auth';
import ordersReducer from './orders';
import productsReducer from './products';
import commentsReducer from './comments';

const appReducer = combineReducers({
  auth: authReducer,
  orders: ordersReducer,
  products: productsReducer,
  comments: commentsReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT')
    state = undefined;

  return appReducer(state, action)
};

export default rootReducer;