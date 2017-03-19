import React, { Component } from 'react';
import './App.css';
var Rebase = require('re-base');
import Game from './components/Game.js'

var base = Rebase.createClass({
  apiKey: "AIzaSyDxZeKOuO8GBsxCRdx2VZNZYoMuC5WVgQw",
  authDomain: "gameofgifs-ad3d4.firebaseapp.com",
  databaseURL: "https://gameofgifs-ad3d4.firebaseio.com",
  storageBucket: "gameofgifs-ad3d4.appspot.com",
  messagingSenderId: "582686608727"
}, 'App');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: null,
      gifs: null,
      gameMaster: null,
      winningGif: null
    };
    this.onNewRound = this.setStateFromRounds.bind(this);
    this.onJoinGame = this.onJoinGame.bind(this);
  }

  setStateFromRounds(roundsData) {
    const currentRound = roundsData[roundsData.length - 1];
    if (currentRound) {
      this.setState(
        {
            gifs: currentRound.gifs,
            gameMaster: currentRound.gameMaster,
            winningGif: currentRound.winningGif
        }
      );
    }
  }

  onJoinGame() {
    base.listenTo('rounds', {
      context: this,
      asArray: true,
      then(roundsData) {
        this.setStateFromRounds(roundsData);
      }
    });

    base.push('players', {
      data: {
        score: 0
      }
    }).then(newPlayer => {
      this.setState({playerId: newPlayer.key});
      base.fetch('rounds', {
        context: this,
        asArray: true
      }).then(data => {
        if (data.length === 0) {
          base.push('rounds', {
            data: {
              gameMaster: this.state.playerId
            }
          }).then(newRound => {
            this.setState(
              {
                gifs: [],
                gameMaster: this.state.playerId,
                winningGif: null
              }
            );
          }).catch(err => {
            console.log(err);
          });
        } else {
          this.setStateFromRounds(data);
        }
      }).catch(error => {
        console.log(error);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  getGameRendering() {
    if (this.state.playerId) {
      return <Game gifs={this.state.gifs}
              isGameMaster={this.state.gameMaster === this.state.playerId}
              winningGif={this.state.winningGif}
              playerId={this.state.playerId}/>
    } else {
      return <button type="button" onClick={this.onJoinGame}>Join Game</button>;
    }
  }

  render() {
    return (
      <div className="App">
        {this.getGameRendering()}
      </div>
    );
  }
}

export default App;
