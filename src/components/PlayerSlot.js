import React, { Component } from 'react';

const styles={
  playerSlot: {
    textAlign: 'left',
    paddingLeft: '10px',
    color: 'black',
  },
  playerSlotMe: {
    textAlign: 'left',
    paddingLeft: '10px',
    backgroundColor: '#e6e6e6',
    color: 'black',
  },
};


export default class PlayerSlot extends Component {


  render() {
    if (!this.props.isMe) {
      return (
        <div style= {styles.playerSlot}>
        {`Player ${this.props.playerKey.slice(-6,-1)}: ${this.props.playerScore}`}
        </div>
      );
    }
    else {
      return (
        <div style= {styles.playerSlotMe}>
        {`Player ${this.props.playerKey.slice(-6,-1)}: ${this.props.playerScore}`}
        </div>
      );
    }
  }
}
