import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GifTable from './GifTable.js'

const styles={
  gifTable: {
    width:'100%',
  },
};

export default class Showdown extends Component {

  render() {
    return (
      <GifTable
        urls={this.props.submittedUrls}
        selectGif={this.props.selectGif}
        selectedGif={this.props.selectedGif}
      />
    );
  }
}
