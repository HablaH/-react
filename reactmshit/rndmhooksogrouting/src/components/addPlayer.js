import React, { Component, Fragment } from "react";
import Autocomplete from "./autoCompleteInput";

class AddPlayer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Autocomplete playerList={PlayerList} />
        <ListOfPlayers />
      </Fragment>
    );
  }
}

export default AddPlayer;
