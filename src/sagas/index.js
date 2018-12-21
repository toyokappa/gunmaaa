import { fork } from 'redux-saga/effects';

import blogSaga from './blog';

export default function* rootSaga() {
  yield fork(blogSaga);
}
