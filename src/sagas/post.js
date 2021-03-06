import { call, fork, put, take } from 'redux-saga/effects';

import rootActions from '../actions';
import * as ContentfulApi from '../apis/contentfulApi';

function* handleRequestPost() {
  while (true) {
    const action = yield take(rootActions.requestPost);
    const { postSlug } = action.payload;
    const { payload, error } = yield call(ContentfulApi.getEntry, postSlug);
    if (payload && !error) {
      yield put(rootActions.successPost(payload));
    } else {
      yield put(rootActions.failurePost(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestPost);
}
