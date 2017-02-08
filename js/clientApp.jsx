const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')


const containerApp = document.getElementById('app');

const App = React.createClass ({
  assignShow(nexState, replace) {
    //nexState.params.id comes from the :id on the route

    const showArray = shows.filter((show) =>show.imdbID === nexState.params.id);

    if (showArray.length < 1) {
      // replace is a router function
        return replace('/');
    }

    Object.assign(nexState.params, showArray[0]);
    return nexState;
  },

  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
          </Route>
        </Router>
      </Provider>
    )
  }
});

ReactDOM.render(<App/>, containerApp);


