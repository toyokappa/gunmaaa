import { fork } from 'redux-saga/effects';

import blogSaga from './blog';
import postSaga from './post';
import githubSaga from './github';

export default function* rootSaga() {
  yield fork(blogSaga);
  yield fork(postSaga);
  yield fork(githubSaga);
}
