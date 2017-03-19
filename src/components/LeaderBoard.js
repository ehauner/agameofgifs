import React, { Component } from 'react';
import PlayerSlot from './PlayerSlot.js'

const styles={
  leaderBoard: {
    width:'100%',
    marginTop: '50px',
  },
};


export default class LeaderBoard extends Component {

  sortPlayers(players) {
    return players.sort((a, b) => (b.score-a.score))
  }

  renderPlayers() {
    return this.sortPlayers(this.props.players).map((player) =>
    <PlayerSlot key = {Math.random()} playerKey = {player.key} playerScore = {player.score}/> )
  }

  render() {
    return (
      <div style= {styles.leaderBoard}>
      {this.renderPlayers()}
      </div>
    );
  }
}
