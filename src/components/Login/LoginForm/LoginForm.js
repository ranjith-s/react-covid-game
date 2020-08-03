import React from "react";
import Input from "../../Input/Input";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUsername(username) {
    this.setState({ username: username });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  clickHandler() {
    // alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    if (
      this.state.username === "ironman" &&
      this.state.password === "iamironman"
    ) {
      this.props.isLoginAttemptSuccess(true);
      this.props.setSignedIn(this.state.username);
    } else {
      this.setState({ username: "", password: "" });
      this.props.isLoginAttemptSuccess(false);
    }
  }

  render() {
    return (
      <div id="login-form">
        <Input
          id="username"
          labelName="Username: "
          inputType="text"
          parentFunction={this.setUsername}
        />
        <Input
          id="password"
          labelName="Password: "
          inputType="password"
          parentFunction={this.setPassword}
        />
        <button
          className="loginButton"
          onClick={this.clickHandler}
          disabled={this.props.loginLoading}
        >
          {this.props.loginLoading ? "Logging in..." : this.props.buttonName}
        </button>
      </div>
    );
  }
}

export default LoginForm;
