import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import blogReducer from './blog';
import postReducer from './post';
import githubReducer from './github';

export default history =>
  combineReducers({
    router: connectRouter(history),
    blogReducer,
    postReducer,
    githubReducer,
  });
