import React from 'react';
import ShowCard from './showCard'
import Header from './header'
const { arrayOf, object} = React.PropTypes;


const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  handleSearchTermChange (searchTerm) {
    this.setState({searchTerm: searchTerm});
  },

  propTypes :  {
    params: object
  },

  render () {


    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className='shows'>
          {this.props.route.shows
            .filter((currentShow) => `${currentShow.title} ${currentShow.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((currentShow) => (
            <ShowCard {...currentShow} key={currentShow.imdbID}/>
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search;