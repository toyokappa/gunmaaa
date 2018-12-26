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
        slug: post.fields.slug,
        title: post.fields.title,
        description: post.fields.description,
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
  const sortedPostsMap = postsMap.sortBy((_v, k) => k).reverse();
  return sortedPostsMap;
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

    [rootActions.requestBlogWithTag]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successBlogWithTag]: (state, { payload }) => ({
      ...state,
      blog: new BlogModel({ posts: getPostsFromApi(payload.blog.data.items) }),
      error: null,
      isFetching: false,
    }),

    [rootActions.failureBlogWithTag]: (state, { payload }) => ({
      ...state,
      blog: new BlogModel(),
      error: payload,
      isFetching: false,
    }),
  },
  defaultState
);
