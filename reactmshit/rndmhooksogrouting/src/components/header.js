import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    const { currentField, currentHole } = this.props;
    return (
      <Fragment>
        <h1>{currentField}</h1>
        <h3>hole# {currentHole}</h3>
      </Fragment>
    );
  }
}

export default Header;
