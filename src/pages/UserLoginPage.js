import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginProcess } from '../actions/auth';

import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import Notification from '../components/Notification/Notification';

class UserLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: undefined
    }
  }

  handleOnChangeEmail = e => {
    const email = e.target.value;
    this.setState({ email })
  };

  handleOnChangePassword = e => {
    const password = e.target.value;
    this.setState({ password })
  };

  handleOnSubmitForm = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({ error: 'Email and Password Required.' })
    } else {
      this.props.userLoginProcess(email, password)
    }
  };

  render() {
    const { email, password, error } = this.state;
    const { status } = this.props;
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div className="login-form">
              {error && <Notification type="is-danger" msg={error} />}
              {status === 'error' && <Notification type="is-danger" msg="Invalid email or password" />}
              <form onSubmit={this.handleOnSubmitForm}>
                <div className="field">
                  <InputField
                    label="Email Address"
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={this.handleOnChangeEmail}
                  />
                </div>
                <div className="field">
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleOnChangePassword}
                  />
                </div>
                <Button styleClass="is-black">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  status: state.auth.status
});

const mapDispatchToProps = (dispatch) => ({
  userLoginProcess: (email, password) => dispatch(userLoginProcess(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginPage);