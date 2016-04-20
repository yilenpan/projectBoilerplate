import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/app';

const Hello = React.createClass({
  render () {
    return (
      <h1>Hello You</h1>
    );
  }
});

const NoMatch = React.createClass({
  render () {
    return <h1>404</h1>
  }
});

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path='hello' component={Hello} />
      <Route path="/*" component={NoMatch}/>
    </Router>
  );
};
