import React from "react";
import "./Game.css";
import { connect } from "react-redux";
import * as ACTIONS from "../../data/actions/actions";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corona: 50,
      coronaMap: {
        50: {
          image: "https://i.ibb.co/42z1x41/HandWash.jpg",
          action: "Wash your Hands Often",
        },
        40: {
          image:
            "https://i.ibb.co/0BbNjQG/Social-Distancing-People-Keep-Distance-in-Public-Place-Protect-from-Covid-19-Outbreak-Spreading-Char.jpg",
          action: "Maintain Social Distancing",
        },
        30: {
          image: "https://i.ibb.co/48BFyVL/WearMask.jpg",
          action: "Wear Masks",
        },
        20: {
          image:
            "https://i.ibb.co/x2BXDMq/Stay-at-Home-social-media-banner-Self-quarantine-coronavirus-prevention-self-isolation-epidemic-covi.jpg",
          action: "Avoid Unnecessary commuting",
        },
        10: {
          image:
            "https://i.ibb.co/ZXmYH0S/Antibiotic-fight-bacteria-and-virus-Strong-antibiotics-pills-with-shield-protect-from-bacterias-medi.jpg",
          action: "Eat Immunity High Food",
        },
        0: { image: "https://i.ibb.co/VJVtLsh/RIPCorona.jpg", action: "" },
      },
    };
  }
  prevent = () => {
    this.props.prevent();
  };
  restart = () => {
    this.props.reset();
  };

  render() {
    var imagePath = this.state.coronaMap[this.props.corona].image;
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

        <p onClick={this.props.logout} className="signout-label">
          Sign out
        </p>
        <p className="game-banner">
          Let's Fight
          <span role="img" aria-label="boquet">
            ⚔️
          </span>{" "}
          the Covid
        </p>

        {/* Covid Cartoon */}

        <div
          id="cartoon"
          style={{
            backgroundImage: `url(${imagePath})`,
          }}
        ></div>

        {/* Victory Message */}

        {this.props.corona < 10 && (
          <p className="victory-message">
            You did it!
            <span role="img" aria-label="boquet">
              🙌🏻🎉
            </span>
            <strong className="username">{this.props.user}</strong> Saved the
            World again{" "}
            <span role="img" aria-label="boquet">
              🌎🦸
            </span>
          </p>
        )}

        {/* Covid  Meter */}

        <p className="corona-meter-label">Corona severity Meter</p>

        <div id="corona-meter">
          <div style={{ width: this.props.corona * 2 + "%" }}></div>
        </div>

        {/* Game Controls */}

        <div id="controls">
          {!this.props.gameOver && (
            <button onClick={this.prevent}>
              {this.state.coronaMap[this.props.corona].action}
            </button>
          )}
          <button onClick={this.restart}>Restart</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    corona: state.game_reducer.corona,
    gameOver: state.game_reducer.gameOver,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    prevent: () => dispatch(ACTIONS.prevent()),
    reset: () => dispatch(ACTIONS.reset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
