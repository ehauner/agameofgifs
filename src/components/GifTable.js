import React, { Component } from 'react';
import Gif from './Gif.js'

export default class GifTable extends Component {

  render() {
    return (
        <div className="GifTable">
            <h1>{this.getGifs()}</h1>
            <p>"test"</p>
        </div>
    )
  }

  getGifs(){
      return this.props.urls.map((gifurl) =>
        <Gif key={Math.random()} url={gifurl} selectGif={this.props.selectGif}></Gif>)
  }
}
