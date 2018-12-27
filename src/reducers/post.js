import { handleActions } from 'redux-actions';

import PostModel from '../models/Post';
import rootActions from '../actions';

const defaultState = {
  post: new PostModel(),
  error: null,
  isFetching: false,
};

function getPostFromApi(data) {
  const post = data.items[0];
  const asset = data.includes.Asset[0];

  return new PostModel({
    id: post.sys.id,
    slug: post.fields.slug,
    title: post.fields.title,
    eyeCatchUrl: asset.fields.file.url,
    description: post.fields.description,
    body: post.fields.body,
    tags: post.fields.tags,
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
