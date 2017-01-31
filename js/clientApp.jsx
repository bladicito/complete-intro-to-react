var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle.jsx')

var containerApp = document.getElementById('app')

// this does not work with a function or variable declaration inside the arrow funtion
// as if it has parenthesis it will be assumed that it is a return.

// if we need to do something else inside this component then use the other syntax:
//var MyFirstComponent = () => {
//  const x = 'blablalvba'
//  return (
//    <div>{x}</div>
//  )
//}


var MyFirstComponent  = () => (
    <div>
      <MyTitle title="You say your not getting enough" color='purple' />
      <MyTitle title="But I remind you of all that bad stuff" color='peru' />
      <MyTitle title="So what the hell am I supposed to do?" color='red' />
      <MyTitle title="Just put a bandaid on it?" color='blue' />
      <MyTitle title="And stop the bleeding now" color='green' />
    </div>
  )

ReactDOM.render(<MyFirstComponent/>, containerApp)

