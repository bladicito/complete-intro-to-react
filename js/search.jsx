import React from 'react';
import data from '../public/data.json'
import ShowCard from './showCard'


const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'This is my search term'
    }
  },

  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value});
  },

  render () {
    return (
      <div className='container'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input onChange={this.handleSearchTermEvent} className='seeach-input' type='text'  placeholder='Search' value={this.state.searchTerm}/>
        </header>
        <div className='shows'>
          {data.shows.map((currentShow) => (
            <ShowCard {...currentShow} key={currentShow.imdbID}/>
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search;