import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, Dude Man</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
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
      round: null,
    }
  }

  componentDidMount(){
    base.syncState('round', {
      context: this,
      state: 'round'
    });
  }

  getDummyGifUrls() {
      return( ['https://media.giphy.com/media/l0Iy59GA3gtCEgBkk/giphy.gif',
                'https://media.giphy.com/media/3ohze1TZQRsSB7ZzBm/giphy.gif',
                'https://media.giphy.com/media/4QdAF8Mby9vW0/giphy.gif',
                'https://media.giphy.com/media/l0K4fIEZ1FFiWFJPq/giphy.gif'
            ])
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <p>Round: {this.state.round}</p>
        <GifTable urls = {this.getDummyGifUrls()} />
        <Footer />
>>>>>>> 34ee360b6c3492c4e7333910ec1936001b795481
      </div>
    );
  }
}

export default App;
