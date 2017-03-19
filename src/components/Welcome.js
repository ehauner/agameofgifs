import React, { Component } from 'react';
import '../App.css';

const styles = {
  button: {
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius : '5px',
    height: '50px',
    width: '200px',
    fontSize: '20px',
  }
};

export default class Welcome extends Component {

  render() {
    return (
      <div className="Game">
        <h2 style={{fontSize:'30px', marginTop:'20%'}}>A Game Of Gifs</h2>
        <p style={{fontSize:'20px'}}>Have laughs. Have fun.</p>
        <button style={styles.button} type="button" onClick={() => this.props.onJoinGame()}>Join Game</button>
      </div>
    );
  }
}
