import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {searchGiphy} from '../api/giphy.js'
import GifTable from './GifTable.js'

const styles={
  search: {
    width: '100%',
  },
  searchBar: {
    width: '100%',
    border: 'none',
    boxShadow: "0px 2px 10px #666666",
    fontSize: '20px',
    padding: '10px 15px',
  },
};

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: null,
      query: null,
    }
  }

  handleSearchArg(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.searchBar).value.trim();
    searchGiphy(text).then((data) => {
      this.setState({searchResults: data})}).catch((err) => console.log(err));
    ReactDOM.findDOMNode(this.refs.searchBar).value = '';
    this.setState({
      query: text
    });
  }

  renderGifTable() {
    if (this.state.searchResults) {
      return <GifTable urls={this.state.searchResults.slice(0,4)}/>
    }
    else {
      return null
    }
  }

  render() {
    return (
      <div className="GifTable">
      <form className={styles.search} onSubmit={this.handleSearchArg.bind(this)}>
        <input
          style={styles.searchBar}
          type="text"
          ref="searchBar"
          placeholder={(this.state.query == null ? 'Search Giphy' : this.state.query)}
        />
      </form>
      <div className="GifTable">{this.renderGifTable()}</div>
      </div>
    )
  }
}
