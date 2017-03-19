import React, { Component } from 'react';
import '../css/Gif.css';

export default class Gif extends Component {
  render() {
    return (
      <img className='gif' src={this.props.url} />
    )
  }
}
