import React, { Component, Fragment } from "react";
class AddPlayerInputAndButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerInput: "",
      playerList: [],
    };
  }

  handleInput = (e) => {
    console.log(e.currentTarget.value);
    this.setState({
      playerInput: e.currentTarget.value,
    });
  };

  handleAddPlayer = () => {
    const currentPlayerList = this.state.playerList;
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
    const {
      handleInput,
      handleAddPlayer,
      handleRemovePlayer,
      state: { playerInput, playerList },
    } = this;
    return (
      <Fragment>
        <div>
          <input
            type="text"
            placeholder="Player name.."
            value={playerInput}
            onChange={handleInput}
          />
          <button onClick={handleAddPlayer}>add</button>
          <ul>
            {playerList.map((player, key) => {
              return (
                <li key={key} onClick={() => handleRemovePlayer(key)}>
                  {player.name}
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default AddPlayerInputAndButton;
