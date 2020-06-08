import React from "react";
import LoginForm from "./LoginForm/LoginForm.js";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInvalidMsg: false,
    };
  }
  isLoginAttemptSuccess = (status) => {
    this.setState({ showInvalidMsg: !status });
  };
  render() {
    return (
      <div id="login-container">
        <h2>{this.props.title}</h2>

        <p className="errorMsg">
          {this.state.showInvalidMsg && <h5>Invalid Credentials!</h5>}
        </p>

        <LoginForm
          buttonName="Login"
          setSignedIn={this.props.setSignedIn}
          isLoginAttemptSuccess={this.isLoginAttemptSuccess}
        />
      </div>
    );
  }
}

export default Login;
