import { fork } from 'redux-saga/effects';

import blogSaga from './blog';
import postSaga from './post';

export default function* rootSaga() {
  yield fork(blogSaga);
  yield fork(postSaga);
}
