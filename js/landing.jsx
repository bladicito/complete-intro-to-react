const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./store')
const { hashHistory } = require('react-router')

// to show how binding should be done in es6 classes
class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTermEvent (evt) {
    this.props.setSearchTerm(evt.target.value)
  }

  gotoSearch (evt) {
    hashHistory.push('search')
    evt.preventDefault()
  }

  render () {
    return (
      <div clasName='home-info'>
        <h1 className='title'>SVideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            className='search'
            type='text'
            placeholder='Search'
            value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
          />
          <Link to='/search' className='browse-all' >or Browse all</Link>
        </form>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes =  {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)

