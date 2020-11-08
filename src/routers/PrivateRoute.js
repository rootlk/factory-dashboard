import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          <div className="container">
            <Component {...props} />
          </div>
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.auth_id
});

export default connect(mapStateToProps)(PrivateRoute);