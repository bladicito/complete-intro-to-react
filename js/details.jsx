import React from 'react'
import Header from './Header'
const axios = require('axios')
import { connector } from './store'


const Details = React.createClass({

  getInitialState() {
   return {omdbData: {}}
  },


  componentDidMount () {
    console.log('fired');
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  },


  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  },

  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    let rating

    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <p>no data yet</p>
    }



    return (
      <div className='container'>
        <Header/>
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          {rating}
          <p className='video-description'>{description}</p>
          <div className='video-container'>
              <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
})

const {arrayOf, object} = React.PropTypes

Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
}

module.exports = connector(Details)