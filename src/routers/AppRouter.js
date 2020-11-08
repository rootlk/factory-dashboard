import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../helper/history';

import PrivateRoute from './PrivateRoute';
import UserLoginPage from '../pages/UserLoginPage';
import DashboardPage from '../pages/DashboardPage';
import FactoryDashboardPage from '../pages/FactoryDashboardPage';
import CustomerServicePage from '../pages/CustomerServicePage';
import WarehouseJsmPage from '../pages/WarehouseJsmPage';


const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={UserLoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/factory" component={FactoryDashboardPage} />
      <PrivateRoute path="/customer" component={CustomerServicePage} />
      <PrivateRoute path="/warehouse" component={WarehouseJsmPage} />
    </Switch>
  </Router>
);

export default AppRouter;