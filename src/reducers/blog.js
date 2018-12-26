import { OrderedMap } from 'immutable';
import { handleActions } from 'redux-actions';

import BlogModel from '../models/Blog';
import PostModel from '../models/Post';
import rootActions from '../actions';

const defaultState = {
  blog: new BlogModel(),
  error: null,
  isFetching: false,
};

function getPostsFromApi(posts) {
  const postModels = posts.map(
    post =>
      new PostModel({
        id: post.sys.id,
        title: post.fields.title,
        body: post.fields.body,
        tags: post.fields.tags,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt,
      })
  );

  const postsMap = postModels.reduce(
    (map, post) => map.set(post.createdAt, post),
    OrderedMap()
  );
  return postsMap;
}

export default handleActions(
  {
    [rootActions.requestBlog]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successBlog]: (state, { payload }) => ({
      ...state,
      blog: new BlogModel({ posts: getPostsFromApi(payload.blog.data.items) }),
      error: null,
      isFetching: false,
    }),

    [rootActions.failureBlog]: (state, { payload }) => ({
      ...state,
      blog: new BlogModel(),
      error: payload,
      isFetching: false,
    }),
  },
  defaultState
);
