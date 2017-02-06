const React = require('react');

const Layout = (props) => (
  <div className='app-container search'>
    {props.children}
  </div>
)

const element = React.PropTypes.element;

Layout.propTypes = {
  children: element.isRequired
};

module.exports = Layout;