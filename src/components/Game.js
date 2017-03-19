import React, { Component } from 'react';
import '../App.css';
var Rebase = require('re-base');
import Header from './Header.js'
import Footer from './Footer.js'
import SearchBar from './SearchBar.js'

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
    }
    this.selectGif = this.selectGif.bind(this);
  }

  // Push winning id to Firebase
  submitGif() {
    base.push('gifs', {
      data: {
        url: this.state.selectedGif,
        player: this.props.playerId
      },
      then(err){
        if(err) {
          console.error(err);
        }
      }
    });
  }

  selectGif(url) {
    console.log(url);
    this.setState({
      selectedGif: url
    });
  }

  render() {
    return (
      //TODO: CSS?
      <div className="Game">
        <Header isGameMaster={this.props.isGameMaster} playerId={this.props.playerId}/>
        <SearchBar selectGif={(url) => this.selectGif(url)} selectedGif={this.state.selectedGif} />
        <p>Round: {this.props.round}</p>
        <Footer submitGif={this.submitGif} />
        <button onClick={() => this.submitGif()}>Submit</button>
      </div>
    );
  }
}
