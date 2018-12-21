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
    body: post.fields.body,
    createdAt: post.sys.createdAt,
    updatedAt: post.sys.updatedAt,
  });
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
  },
  defaultState
);
