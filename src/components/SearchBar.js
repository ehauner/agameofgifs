import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {searchGiphy} from '../api/giphy.js'
import GifTable from './GifTable.js'

const styles={
  search: {
    width: '100%',
  },
  searchBar: {
    width: '92%',
    border: 'none',
    boxShadow: "0px 2px 10px #666666",
    fontSize: '20px',
    padding: '10px 4%',
    cursor: 'pointer',
  },
  gifTable: {
    width:'100%',
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
      return <GifTable urls={this.state.searchResults.slice(0,4)} selectGif={this.props.selectGif} selectedGif={this.props.selectedGif}/>
    }
    else {
      return null
    }
  }

  render() {
    return (
      <div className="GifTable">
      <form style={styles.search} onSubmit={this.handleSearchArg.bind(this)}>
        <input
          style={styles.searchBar}
          type="text"
          ref="searchBar"
          onFocus={() => this.props.selectGif(null)}
          placeholder={(this.state.query == null ? 'Search Giphy' : this.state.query)}
        />
      </form>
      <div style={styles.gifTable}>{this.renderGifTable()}</div>
      </div>
    )
  }
}
