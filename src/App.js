import Login from "./components/Login/Login.js";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import "./App.css";
import { connect } from "react-redux";
import * as ACTIONS from "./data/actions/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInFooter: "",
      loggedOutFooter: "Login to continue",
      HeaderText: "React App",
    };
  }
  signIn = (username) => {
    this.props.login(username);
  };
  logout = () => {
    this.props.logout();
  };
  render() {
    return (
      <div id="app">
        <Header text={this.state.HeaderText} />
        {this.props.signedIn ? (
          <Game user={this.props.username} logout={this.logout} />
        ) : (
          <Login title="Enter your credentials" setSignedIn={this.signIn} />
        )}
        <Footer
          text={
            this.props.signedIn
              ? this.state.loggedInFooter
              : this.state.loggedOutFooter
          }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signedIn: state.auth_reducer.is_authenticated,
    username: state.auth_reducer.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username) => dispatch(ACTIONS.login(username)),
    logout: () => dispatch(ACTIONS.logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
