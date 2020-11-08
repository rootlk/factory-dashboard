import React from 'react';
import { connect } from 'react-redux';
import { userLogoutProcess } from '../../actions/auth';

import Logo from '../Logo/Logo';

const Header = (props) => {
  const onClickUserLogout = () => {
    props.userLogoutProcess()
  }
  return (
    <header className="header">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <Logo />
            </div>
          </div>
          <div className="level-right">
            <p className="level-item">{props.name}</p>
            <div className="level-item">
              <button className="button is-warning" onClick={onClickUserLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  name: state.auth.user.name
});

const mapDispatchToProps = (dispatch) => ({
  userLogoutProcess: () => dispatch(userLogoutProcess())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);