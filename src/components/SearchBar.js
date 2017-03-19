import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {searchGiphy} from '../api/giphy.js'
import GifTable from './GifTable.js'

const styles={
  search: {
    width: '100%',
  }
};
export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchResults: null,
    }
  }

  handleSearchArg(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.searchBar).value.trim();
    searchGiphy(text).then((data) => {
      this.setState({searchResults: data})}).catch((err) => console.log(err));
    ReactDOM.findDOMNode(this.refs.searchBar).value = '';
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
              type="text"
              ref="searchBar"
              placeholder="search giphy"
            />
      </form>
      <div className="GifTable">{this.renderGifTable()}</div>
      </div>
    )
  }
}
