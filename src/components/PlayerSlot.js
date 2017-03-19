import React, { Component } from 'react';

const styles={
  playerSlot: {
    width:'100%',
    boxShadow: "0px 1px 5px #666666",
  },
};


export default class PlayerSlot extends Component {


  render() {
    return (
      <div style= {styles.playerSlot}>
      {`Player Name: ${this.props.playerKey.slice(-6,-1)} --- Player score: ${this.props.playerScore}`}
      </div>
    );
  }
}
