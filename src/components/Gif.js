import React, { Component } from 'react';

const styles = {
  gif: {
    width: '33%',
  }
};

export default class Gif extends Component {
  componentDidMount() {
  //  console.log(this.props.url)
  }
  render() {
    return (
      <img style={styles.gif} src={this.props.url} alt={'gif'}/>
    )
  }
}
