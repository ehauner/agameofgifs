import React, { Component } from 'react';
import '../App.css';
import {searchGiphy} from '../api/giphy.js'

const styles = {
  button: {
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    borderRadius : '5px',
    height: '50px',
    width: '200px',
    fontSize: '20px',
    cursor: 'pointer',
  },
  gif: {
    marginTop: '5%',
    width: '90%',
  }
};

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: null,
    }
  }

  componentDidMount() {
    searchGiphy('laugh')
    .then((data) => {
      this.setState({url: data[Math.round(Math.random() * data.length)]})
    })
    .catch((err) => console.log(err))
  }

  render() {
    console.log(this.state);
    return (
      <div className="Game">
        <h2 style={{fontSize:'30px', marginTop:'10%'}}>A Game Of Gifs</h2>
        <p style={{fontSize:'20px'}}>Have laughs. Have fun.</p>
        <button style={styles.button} type="button" onClick={() => this.props.onJoinGame()}>Join Game</button>
        <img style={styles.gif} src={this.state.url} />
      </div>
    );
  }
}
