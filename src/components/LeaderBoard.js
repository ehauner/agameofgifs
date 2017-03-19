import React, { Component } from 'react';
import PlayerSlot from './PlayerSlot.js'

const styles={
  leaderBoard: {
    width:'100%',
    marginTop:'15px'
  },
};


export default class LeaderBoard extends Component {

  sortPlayers(players) {
    return players.sort((a, b) => (b.score-a.score))
  }

  renderPlayers() {
    console.log(this.props.playerId);
    return this.sortPlayers(this.props.players).map((player) =>
    <PlayerSlot key={Math.random()} playerKey={player.key} playerScore={player.score} isMe={this.props.playerId === player.key}/> )
  }

  render() {
    return (
      <div style= {styles.leaderBoard}>
      {this.renderPlayers()}
      </div>
    );
  }
}
