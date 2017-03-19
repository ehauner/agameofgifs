import React, { Component } from 'react';
import LeaderBoard from './LeaderBoard.js'

const styles = {
  header: {
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    backgroundColor: '#222',
    color: 'white',
    height: '90px',
    paddingTop: '6px',
    width: '100%',
    zIndex: '100',
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius : '5px',
  },
  prompt: {
    color: 'white',
    width: '90%',
    margin: '10px auto',
  }
};

export default class Header extends Component {

  getRole() {
    return (this.props.isGameMaster ? 'Game Master' : 'Player');
  }

  render() {
    let role = this.getRole();
    console.log(this.props);
    if (this.props.showLeaderBoard) {
      return (
        <div style={styles.header}>
          <table style={{width:'100%'}}>
            <tbody>
              <tr>
                <td style={{width:'15%'}}></td>
                <td style={{width:'70%', textAlign:'center'}}>
                  <h2>{role}</h2>
                </td>
                <td style={{width:'15%'}}>
                  <button style={styles.button} onClick={() => this.props.toggleLeaderBoard()}>
                    Scores
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={styles.prompt}>{this.props.reactionPrompt}</p>
          <LeaderBoard players={this.props.players} playerId={this.props.playerId} />
        </div>
      )
    } else {
      return (
        <div style={styles.header}>
          <table style={{width:'100%'}}>
            <tbody>
              <tr>
                <td style={{width:'15%'}}></td>
                <td style={{width:'70%', textAlign:'center'}}>
                  <h2>{role}</h2>
                </td>
                <td style={{width:'15%'}}>
                  <button style={styles.button} onClick={() => this.props.toggleLeaderBoard()}>
                    Scores
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={styles.prompt}>{this.props.reactionPrompt}</p>
        </div>
      )
    }
  }
}
