import React, { Component } from 'react';

const styles = {
  gif: {
    width: '48%',
    padding: '1%'
  },
  selected: {
    width: '48%',
    padding: '1%',
    backgroundColor: 'green',
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
