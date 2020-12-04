import React, { Component, Fragment } from "react";
import AddPlayerInputAndButton from "./addPlayerInputAndButton";
import StartRoundButton from "./startRoundButton";

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerInput: "",
    };
  }

  handleInput = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      playerInput: e.currentTarget.value,
    });
  };

  handleAddPlayer = () => {
    const currentPlayerList = this.props.playerList;
    currentPlayerList.push({ name: this.state.playerInput });
    this.setState({
      playerList: currentPlayerList,
      playerInput: "",
    });
  };

  handleRemovePlayer = (index) => {
    const currentPlayerList = this.state.playerList;
    currentPlayerList.splice(index, 1);
    this.setState({
      playerList: currentPlayerList,
    });
  };
  render() {
    const playerList = this.props.playerList;
    return (
      <Fragment>
        <AddPlayerInputAndButton
          playerInput={this.state.playerInput}
          playerList={playerList}
          handleInput={this.handleInput}
          handleAddPlayer={this.handleAddPlayer}
          handleRemovePlayer={this.handleRemovePlayer}
        />
        <StartRoundButton handleStartRound={this.props.handleStartRound} />
      </Fragment>
    );
  }
}

export default Setup;
