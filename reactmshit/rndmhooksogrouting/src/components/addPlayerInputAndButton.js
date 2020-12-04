import React, { Component, Fragment } from "react";
class AddPlayerInputAndButton extends Component {
  render() {
    const { handleInput, handleAddPlayer, handleRemovePlayer } = this.props;
    return (
      <Fragment>
        <div>
          <input
            type="text"
            placeholder="Player name.."
            value={this.props.playerInput}
            onChange={handleInput}
          />
          <button onClick={handleAddPlayer}>add</button>
          <ul>
            {this.props.playerList.map((player, key) => {
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
