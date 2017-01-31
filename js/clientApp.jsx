const React = require('react');
const ReactDOM  = require('react-dom');
const Landing = require('./landing');
const Search = require('./search');
const Layout = require('./layout');
const ReactRouter =  require('react-router');
const { Router, Route, hashHistory, IndexRoute} = require('react-router');
//const Router =  ReactRouter.Router;
//const Route =  ReactRouter.Route;
//const hashHistory = ReactRouter.hashHistory;


const containerApp = document.getElementById('app');

const App = function() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Landing} />
        <Route path='/search' component={Search} />
      </Route>
    </Router>
  )
}

ReactDOM.render(<App/>, containerApp);


