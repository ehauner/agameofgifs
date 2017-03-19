import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GifTable from './GifTable.js'

export default class Showdown extends Component {
  render() {
    return (
      <GifTable
        urls={this.props.urls}
        selectGif={this.props.selectGif}
        selectedGif={this.props.selectedGif}
      />
    );
  }
}
