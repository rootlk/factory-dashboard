import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import allReducers from '../reducers';

// export function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState)
//   } catch (e) {
//     console.log(e)
//   }
// };
//
// function loardFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('state');
//     if (serializedState === null) return undefined
//     return JSON.parse(serializedState)
//   } catch (e) {
//     return undefined
//   }
// };

// const presistedState = loardFromLocalStorage();

// redux dev-tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
