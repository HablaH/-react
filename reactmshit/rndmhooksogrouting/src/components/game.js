import React, { Component, Fragment } from "react";
import Setup from "./setup";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerList: [],
      roundActive: false,
    };
  }

  handleStartRound = () => {
    this.setState({
      roundActive: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Setup
          playerList={this.state.playerList}
          handleStartRound={this.handleStartRound}
        />
      </Fragment>
    );
  }
}

export default Game;
