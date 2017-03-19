import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard.js'

const styles = {
  header: {
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    backgroundColor: '#222',
    color: 'white',
    height: '38px',
    paddingTop: '12px',
    width: '100%',
    zIndex: '100',
  },
};

export default class Header extends Component {

  getRole() {
    return (this.props.isGameMaster ? 'Game Master' : 'Player');
  }

  render() {
    let role = this.getRole();
    return (
      <div style={styles.header}>
        <h2>{role}</h2>
        <LeaderBoard players={this.props.players} playerId={this.props.playerId} />
      </div>
    )
  }
}
