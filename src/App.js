import Login from "./components/Login/Login.js";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      signedIn: false,
      loggedInFooter: "",
      loggedOutFooter: "Login to continue",
      HeaderText: "React App",
    };
  }
  signIn = (username) => {
    this.setState({
      username,
      signedIn: true,
    });
  };
  logout = () => {
    this.setState({
      username: "",
      signedIn: false,
    });
  };
  render() {
    return (
      <div id="app">
        <Header text={this.state.HeaderText} />
        {this.state.signedIn ? (
          <Game user={this.state.username} logout={this.logout} />
        ) : (
          <Login title="Enter your credentials" setSignedIn={this.signIn} />
        )}
        <Footer
          text={
            this.state.signedIn
              ? this.state.loggedInFooter
              : this.state.loggedOutFooter
          }
        />
      </div>
    );
  }
}
