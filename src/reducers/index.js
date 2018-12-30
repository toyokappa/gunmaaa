import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import blogReducer from './blog';
import postReducer from './post';

export default history =>
  combineReducers({
    router: connectRouter(history),
    blogReducer,
    postReducer,
  });
