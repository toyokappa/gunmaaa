import { handleActions } from 'redux-actions';

import PostModel from '../models/Post';
import rootActions from '../actions';

const defaultState = {
  post: new PostModel(),
  error: null,
  isFetching: false,
};

function getPostFromApi(post) {
  return new PostModel({
    id: post.sys.id,
    title: post.fields.title,
    description: post.fields.description,
    body: post.fields.body,
    tags: post.fields.tags,
    createdAt: post.sys.createdAt,
    updatedAt: post.sys.updatedAt,
  });
}

function getEyeCatchFromApi(eyeCatch, post) {
  return post.set('eyeCatchUrl', eyeCatch.fields.file.url);
}

export default handleActions(
  {
    [rootActions.requestPost]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successPost]: (state, { payload }) => ({
      ...state,
      post: getPostFromApi(payload.post.data),
      error: null,
      isFetching: false,
    }),

    [rootActions.failurePost]: (state, { payload }) => ({
      ...state,
      post: new PostModel(),
      error: payload,
      isFetching: false,
    }),

    // XXX: 処理の実行順序(POST -> EYE_CATCH)が保証されない気がする
    [rootActions.requestEyeCatch]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successEyeCatch]: (state, { payload }) => ({
      ...state,
      post: getEyeCatchFromApi(payload.eyeCatch.data, state.post),
      error: null,
      isFetching: false,
    }),

    [rootActions.failureEyeCatch]: (state, { payload }) => ({
      ...state,
      post: new PostModel(),
      error: payload,
      isFetching: false,
    }),
  },
  defaultState
);
