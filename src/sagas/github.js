import { call, fork, put, take } from 'redux-saga/effects';

import rootActions from '../actions';
import * as githubApi from '../apis/githubApi';

function* handleRequestGithub() {
  while (true) {
    yield take(rootActions.requestGithub);
    const { payload, error } = yield call(githubApi.getRepos);
    if (payload && !error) {
      yield put(rootActions.successGithub(payload));
    } else {
      yield put(rootActions.failureGithub(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestGithub);
}
