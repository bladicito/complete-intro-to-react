const React = require('react')
const { Link }  = require('react-router')

const Landing  = () => (
  <div className='app-container'>
    <div clasName='home-info'>
      <h1 className='title'>SVideo</h1>
      <input className='search' type='text' placeholder='Search'/>
      <Link to='/search' className='browse-all' >or Browse all</Link>
    </div>
  </div>
)

module.exports = Landing;

