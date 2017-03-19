import React, { Component } from 'react';
import '../css/Gif.css';

export default class Gif extends Component {
  render() {
    return (
      <img className='gif' src={'https://media.giphy.com/media/ZO8upuwNKfpm0/giphy.gif'} />
    )
  }
}
