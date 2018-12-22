import { call, fork, put, take } from 'redux-saga/effects';

import rootActions from '../actions';
import * as ContentfulApi from '../apis/contentfulApi';

function* handleRequestPost() {
  while (true) {
    const action = yield take('REQUEST_POST');
    const { postId } = action.payload;
    const { payload, error } = yield call(ContentfulApi.getEntry, postId);
    if (payload && !error) {
      const assetId = payload.data.fields.eyeCatch.sys.id;
      yield put(rootActions.successPost(payload));
      yield put(rootActions.requestEyeCatch(assetId));
    } else {
      yield put(rootActions.failurePost(error));
    }
  }
}

function* handleRequestEyeCatch() {
  while (true) {
    const action = yield take('REQUEST_EYE_CATCH');
    const { assetId } = action.payload;
    const { payload, error } = yield call(ContentfulApi.getAsset, assetId);
    if (payload && !error) {
      yield put(rootActions.successEyeCatch(payload));
    } else {
      yield put(rootActions.failureEyeCatch(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestPost);
  yield fork(handleRequestEyeCatch);
}
