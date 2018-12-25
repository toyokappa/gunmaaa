import { call, fork, put, take } from 'redux-saga/effects';

import * as ContentfulApi from '../apis/contentfulApi';
import rootActions from '../actions';

function* handleRequestBlog() {
  while (true) {
    yield take(rootActions.requestBlog);
    const { payload, error } = yield call(ContentfulApi.getEntries);
    if (payload && !error) {
      yield put(rootActions.successBlog(payload));
    } else {
      yield put(rootActions.failureBlog(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestBlog);
}
