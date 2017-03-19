import React, { Component } from 'react';
import '../css/GifTable.css'
import Gif from './Gif.jsx'

export default class GifTable extends Component {

    componentDidMount() {
        console.log(this.props);
    }

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
        <Gif key = {Math.random()} url={gifurl}></Gif>)
  }
}
