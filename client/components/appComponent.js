import React from 'react';
import { Link } from 'react-router';
import AppActions from '../actions/app-actions';

export default React.createClass({
  render () {
    return (
      <div>
        <h1 onClick={AppActions.click}>
          {this.props.say}
        </h1>
        <Link to='/hello'> Click here</Link>
        <Link to='/404'> Bad Link</Link>
      </div>
    )
  }
});
