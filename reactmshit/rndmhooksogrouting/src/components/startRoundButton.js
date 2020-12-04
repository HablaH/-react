import React, { Component } from "react";

class StartRoundButton extends Component {
  render() {
    return <button onClick={this.props.handleStartRound}>Start</button>;
  }
}

export default StartRoundButton;
