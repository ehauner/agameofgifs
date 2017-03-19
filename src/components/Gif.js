import React, { Component } from 'react';

const styles = {
  gif: {
    height: '160px',
    maxWidth: '98%',
    padding: '1%',
  },
  selected: {
    height: '170px',
    maxWidth: '98%',
    padding: '1%',
    backgroundColor: '#3594fb',
    opacity: 0.7
  }
};

export default class Gif extends Component {

  selectGif() {
    console.log(this.props.url)
    this.props.selectGif(this.props.url);
  }

  render() {
    if (!this.props.selected) {
      return (
        <img style={styles.gif} src={this.props.url} alt={'gif'} onClick={() => this.selectGif()}/>
      );
    } else {
      return (
        <img style={styles.selected} src={this.props.url} alt={'gif'} />
      );
    }
  }
}
