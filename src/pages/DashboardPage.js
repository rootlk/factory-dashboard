import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const DashboardPage = ({ department }) => {
  if (department === 'Factory') {
    return <Redirect to="/factory" />
  } else if (department === 'CS') {
    return <Redirect to="/customer" />
  } else if (department === 'WH') {
    return <Redirect to="/warehouse" />
  }
};

const mapStateToProps = (state) => ({
  department: state.auth.user.department
});

export default connect(mapStateToProps)(DashboardPage);