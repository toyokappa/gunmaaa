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

function getPostsFromApi(data) {
  const posts = data.items;
  const assets = data.includes.Asset;

  const postModels = posts.map(post => {
    const eyeCatchId = post.fields.eyeCatch.sys.id;
    const asset = assets.find(a => a.sys.id === eyeCatchId);

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
  });

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
      blog: new BlogModel({ posts: getPostsFromApi(payload.blog.data) }),
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
      blog: new BlogModel({ posts: getPostsFromApi(payload.blog.data) }),
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
