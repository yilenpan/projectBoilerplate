import AppDispatcher from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';

var _counter = 0;

const increment = () => {
  console.log('In Store!');
  return _counter++;
};


var Store = Object.assign({}, EventEmitter.prototype, {

  getCounter () {
    return _counter;
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
      case AppConstants.CLICK:
        increment();
        break;
    }
    Store.emitChange();
    return true;
  })
});

export default Store;
