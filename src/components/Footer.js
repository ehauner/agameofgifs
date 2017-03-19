import React, { Component } from 'react';

const styles = {
  submit: {
    backgroundColor: '#3594fb',
    width: '98%',
    height: '24px',
    color: 'white',
    padding: '10px 0px',
    margin: '0 1%',
    marginTop: '3px',
    fontSize: '20px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  footer: {
    height: '50px',
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '0px',
    textAlign: 'center',
  },
};

export default class Footer extends Component {

  submitGif() {
    this.props.submitGif();
  }

  render() {
    return (
      <div style={styles.footer}>
        <div style={styles.submit} onClick={() => this.submitGif()}>Submit</div>
      </div>
    )
  }
}
