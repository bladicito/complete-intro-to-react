var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle.jsx')

var containerApp = document.getElementById('app')


var MyFirstComponent  = function() {
  return (
    <div>
      <MyTitle title="Whatever" color='purple' />
      <MyTitle title="Whatever gets you through the night is all right" color='peru' />
      <MyTitle title="You say you are not getting enough ... Just put a bandit on it!" color='papayawhip' />

    </div>
  )
}

ReactDOM.render(<MyFirstComponent/>, containerApp)

