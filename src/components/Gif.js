import React, { Component } from 'react';

const styles = {
  gif: {
    width: '48%',
    margin: '1%'
  }
};

export default class Gif extends Component {

  componentDidMount() {
    console.log(this.props);
  }

  selectGif() {
    this.props.selectGif(this.props.url);
  }

  render() {
    return (
      <img style={styles.gif} src={this.props.url} alt={'gif'} onClick={() => this.selectGif()}/>
    )
  }
}
