import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';

export default {
  click () {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CLICK,
      payload: 'Clicked!'
    });
  }
}
