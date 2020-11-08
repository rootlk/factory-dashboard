import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppRouter from '../routers/AppRouter';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;