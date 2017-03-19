import React, { Component } from 'react';

const styles = {
  gif: {
    width: '48%',
    margin: '1%'
  }
};

export default class Gif extends Component {
  render() {
    return (
      <img style={styles.gif} src={this.props.url} alt={'gif'}/>
    )
  }
}
