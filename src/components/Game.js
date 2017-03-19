import React, { Component } from 'react';
import '../App.css';
var Rebase = require('re-base');
import Header from './Header.js'
import Footer from './Footer.js'
import SearchBar from './SearchBar.js'
import Showdown from './Showdown.js'
import LeaderBoard from './LeaderBoard.js'

var base = Rebase.createClass({
  apiKey: "AIzaSyDxZeKOuO8GBsxCRdx2VZNZYoMuC5WVgQw",
  authDomain: "gameofgifs-ad3d4.firebaseapp.com",
  databaseURL: "https://gameofgifs-ad3d4.firebaseio.com",
  storageBucket: "gameofgifs-ad3d4.appspot.com",
  messagingSenderId: "582686608727"
}, 'Game');

export default class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGif: null,
      hasSubmitted: false,
      showLeaderBoard: false,
    }

    this.sleep = this.sleep.bind(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Push winning id to Firebase
  submitGif() {
    if (this.props.isGameMaster) {
      base.fetch('gifs', {
        context: this,
        asArray: true
      }).then(gifs => {
        let winningGifId = null;
        let winningPlayerId = null;
        let newWinningPlayerScore = 0;
        for (let i = 0; i < gifs.length; i++) {
          if (gifs[i].url === this.state.selectedGif) {
            winningGifId = gifs[i].key;
            winningPlayerId = gifs[i].player;
            break;
          }
        }
         for (let i=0; i<this.props.players.length; i++) {
          if (this.props.players[i].key === winningPlayerId) {
            newWinningPlayerScore = (1+this.props.players[i].score);
            break;
          }
        }

        console.log(winningGifId);
        console.log(winningPlayerId);
        console.log(this.state.selectedGif);
        console.log(gifs);
        base.post(`players/${winningPlayerId}/score`, {
            data: newWinningPlayerScore
        });
        base.post(`rounds/${this.props.roundId}/winningGif`, {
          data: winningGifId
        }).then(() => {
          this.sleep(3000).then(() => {
            base.push('rounds', {
              data: {
                gameMaster: winningPlayerId
              }
            }).catch(err => {
              console.log(err);
            });
          })
        })
      }).catch(err => {
        console.log(err);
      })
    } else {
      base.push('gifs', {
        data: {
          url: this.state.selectedGif,
          player: this.props.playerId
        }
      }).then(newGif => {
        base.push(`rounds/${this.props.roundId}/gifs`, {
          data: newGif.key
        }).then(() => {
          this.setState({
            hasSubmitted: true
          })
        }).catch(err => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      });
    }
  }

  selectGif(url) {
    this.setState({
      selectedGif: url
    });
  }

  toggleLeaderBoard() {
    this.setState({
      showLeaderBoard: !this.state.showLeaderBoard,
    });
  }

  getGameRendering() {
    const modUrls = this.props.urls !== undefined ? this.props.urls : [];
    if (this.state.hasSubmitted) {
      return (
        <div className="Game">
          <Header isGameMaster={this.props.isGameMaster} playerId={this.props.playerId} setShowLeaderBoard={this.setShowLeaderBoard} players={this.props.players}/>
          <Showdown urls={modUrls} selectGif={(url) => this.selectGif(url)} selectedGif={this.state.selectedGif}  />
        </div>);
    } else if (this.props.isGameMaster) {
      return (
        <div className="Game">
          <Header isGameMaster={this.props.isGameMaster} playerId={this.props.playerId} setShowLeaderBoard={this.setShowLeaderBoard} players={this.props.players}/>
          <Showdown urls={modUrls} selectGif={(url) => this.selectGif(url)} selectedGif={this.state.selectedGif} />
          <Footer submitGif={() => this.submitGif()}/>
        </div>);
    } else {
      return (
        <div className="Game">
          <Header isGameMaster={this.props.isGameMaster} playerId={this.props.playerId} setShowLeaderBoard={this.setShowLeaderBoard} players={this.props.players}/>
          <SearchBar selectGif={(url) => this.selectGif(url)} selectedGif={this.state.selectedGif} />
          <Footer submitGif={() => this.submitGif()} />
        </div>);
    }
  }

  render() {
    return (
      this.getGameRendering()
    );
  }
}
