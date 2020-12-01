import React, { Component, Fragment } from "react";
import Player from "./player";

class Scorecard extends Component {
  render() {
    const currentPlayers = this.props.currentPlayers;
    return (
      <div>
        {currentPlayers.map((player, key) => {
          return <Player key={key} id={key} name={player.name} />;
        })}
      </div>
    );
  }
}

export default Scorecard;
