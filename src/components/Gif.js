import React, { Component } from 'react';

const styles = {
  gif: {
    width: '33%',
  }
};

export default class Gif extends Component {
  render() {
    return (
      <img style={styles.gif} src={'https://media.giphy.com/media/ZO8upuwNKfpm0/giphy.gif'} alt={'gif'}/>
    )
  }
}
