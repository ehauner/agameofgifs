import React, { Component } from 'react';
import './App.css';
var Rebase = require('re-base');
import Header from './components/Header.js'
import GifTable from './components/GifTable.js'
import Footer from './components/Footer.js'
import SearchBar from './components/SearchBar.js'

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
      isGameMaster: true,
      round: null,
    }
  }

  componentDidMount(){
    base.syncState('round', {
      context: this,
      state: 'round'
    });
  }


  render() {
    return (
      <div className="App">
        <Header isGameMaster={this.state.isGameMaster} playerId={this.state.playerId}/>
        <SearchBar />
        <p>Round: {this.state.round}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
