import React from "react";
import "./Game.css";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corona: 50,
      ended: false,
      coronaMap: {
        50: {
          image: "https://i.ibb.co/0DSgDcW/HandWash.jpg",
          action: "Wash your Hands Often",
        },
        40: {
          image: "https://i.ibb.co/7KcDD64/Social-Distancing.jpg",
          action: "Maintain Social Distancing",
        },
        30: {
          image: "https://i.ibb.co/Fh9RTQV/WearMask.jpg",
          action: "Wear Masks",
        },
        20: {
          image: "https://i.ibb.co/F4PQ7m7/StayHome.jpg",
          action: "Avoid Unnecessary commuting",
        },
        10: {
          image: "https://i.ibb.co/HPxjMjt/Increase-Immunity.jpg",
          action: "Eat Immunity High Food",
        },
        0: { image: "https://i.ibb.co/Jyw9j36/RIPCorona.jpg", action: "" },
      },
    };
  }
  prevent = () => {
    let corona = this.state.corona - 10;
    if (corona <= 0) {
      this.setState({ corona, ended: true });
    } else {
      this.setState({ corona });
    }
  };
  restart = () => {
    this.setState({ corona: 50, ended: false });
  };

  render() {
    var imagePath = this.state.coronaMap[this.state.corona].image;
    return (
      <div>
        {/* Welcome Message */}
        <p>
          Welcome <strong className="username">{this.props.user}</strong>!
          <span role="img" aria-label="boquet">
            💐
          </span>
        </p>

        {/* Game Banner */}

        <a href="/" onClick={this.props.logout} className="signout-label">
          Sign out
        </a>
        <p className="game-banner">Let's Fight⚔️ the Covid</p>

        {/* Covid Cartoon */}

        <div
          id="cartoon"
          style={{
            backgroundImage: `url(${imagePath})`,
          }}
        ></div>

        {/* Victory Message */}

        {this.state.corona < 10 && (
          <p className="victory-message">
            You did it!🙌🏻🎉
            <strong className="username">{this.props.user}</strong> Saved the
            World again 🌎🦸
          </p>
        )}

        {/* Covid  Meter */}

        <p className="corona-meter-label">Corona severity Meter</p>

        <div id="corona-meter">
          <div style={{ width: this.state.corona * 2 + "%" }}></div>
        </div>

        {/* Game Controls */}

        <div id="controls">
          {!this.state.ended && (
            <button onClick={this.prevent}>
              {this.state.coronaMap[this.state.corona].action}
            </button>
          )}
          <button onClick={this.restart}>Restart</button>
        </div>
      </div>
    );
  }
}
export default Welcome;
