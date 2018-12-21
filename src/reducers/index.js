import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import blogReducer from './blog';

export default history =>
  combineReducers({ router: connectRouter(history), blogReducer });
