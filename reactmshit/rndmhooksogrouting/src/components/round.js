import React, { Component } from "react";

class round extends Component {
  state = {
    currentField: "Ekeberg",
    currentHole: 0,
    currentPlayers: [{ name: "Per" }, { name: "Pål" }, { name: "Espen" }],
  };

  render() {
    return (
      <Fragment>
        <Header
          currentField={this.state.currentField}
          currentHole={this.state.currentHole}
        />
        <Scorecard currentPlayers={this.state.currentPlayers} />
      </Fragment>
    );
  }
}
export default round;
