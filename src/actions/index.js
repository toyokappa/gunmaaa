import { createActions } from 'redux-actions';

export default createActions({
  REQUEST_BLOG: payload => ({ payload }),
  SUCCESS_BLOG: blog => ({ blog }),
  FAILURE_BLOG: error => ({ error }),
});
