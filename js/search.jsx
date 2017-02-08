import React from 'react';
import ShowCard from './showCard'
import Header from './header'
const { object, string} = React.PropTypes;
const { connector } = require('./store');


const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  propTypes :  {
    params: object,
    searchTerm : string
  },

  render () {


    return (
      <div className='container'>
        <Header showSearch/>
        <div className='shows'>
          {this.props.route.shows
            .filter((currentShow) => `${currentShow.title} ${currentShow.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((currentShow) => (
            <ShowCard {...currentShow} key={currentShow.imdbID}/>
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search);