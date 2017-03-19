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
      urls: null,
      gameMaster: null,
      winningGif: null,
      roundId: null
    };
    this.setStateFromRounds = this.setStateFromRounds.bind(this);
    this.onJoinGame = this.onJoinGame.bind(this);
  }

  componentDidMount() {
   window.addEventListener("beforeunload", function (e) {
      var dialogText = 'If you leave, you will lose your score.';
      e.returnValue = dialogText;
      return dialogText;
    })
  }

  setStateFromRounds(roundsData) {
    const currentRound = roundsData[roundsData.length - 1];
    if (currentRound) {
      base.fetch('gifs', {
        context: this,
        asArray: false
      }).then(gifs => {
        let modUrls = [];
        if (currentRound.gifs != null) {
          modUrls = Object.keys(currentRound.gifs).map(key => {
            return gifs[currentRound.gifs[key]].url;
          });
        }

        this.setState(
          {
            urls: modUrls,
            gameMaster: currentRound.gameMaster,
            winningGif: currentRound.winningGif,
            roundId: currentRound.key
          }
        );
      });
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
                urls: [],
                gameMaster: this.state.playerId,
                winningGif: null,
                roundId: newRound.key
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
    if (this.state.winningGif != null) {
      base.fetch('gifs', {
        context: this,
        asArray: false
      }).then(gifs => {
        let winningGifUrl = null;
        for (let i = 0; i < gifs.length; i++) {
          if (gifs[i].url === this.state.winningGif) {
            winningGifUrl = gifs[i].url;
            break;
          }
        }

        return <img src={winningGifUrl} alt={'gif'}/>
      });
    } else if (this.state.playerId) {
      return <Game urls={this.state.urls}
              isGameMaster={this.state.gameMaster === this.state.playerId}
              playerId={this.state.playerId}
              roundId={this.state.roundId}/>
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
