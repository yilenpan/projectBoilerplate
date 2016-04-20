import React, {PropTypes} from 'react';
import AppComponent from '../components/appComponent';
import StoreWatchMixin from '../mixins/StoreWatchMixin';
import AppStore from '../stores/app-store';

const getCounter = () => {
  return {
    count: AppStore.getCounter()
  };
}

export default React.createClass({
  mixins: [StoreWatchMixin(getCounter, AppStore)],
  render () {
    return <AppComponent say={this.state.count}/>
  }
})
