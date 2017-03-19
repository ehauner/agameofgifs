import React, { Component } from 'react';

export default class Header extends Component {

  getRole() {
    return (this.props.isGameMaster ? 'Game Master' : 'Player');
  }

  render() {
    let role = this.getRole();
    return (
      <div className="App-header">
        <h2>{role}</h2>
      </div>
    )
  }
}
