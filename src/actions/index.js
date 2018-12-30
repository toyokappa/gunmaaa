import { createActions } from 'redux-actions';

export default createActions({
  // ブログ一覧
  REQUEST_BLOG: payload => ({ payload }),
  SUCCESS_BLOG: blog => ({ blog }),
  FAILURE_BLOG: error => ({ error }),

  // タグで絞り込んだブログ一覧
  REQUEST_BLOG_WITH_TAG: postTag => ({ postTag }),
  SUCCESS_BLOG_WITH_TAG: blog => ({ blog }),
  FAILURE_BLOG_WITH_TAG: error => ({ error }),

  // ブログ記事
  REQUEST_POST: postSlug => ({ postSlug }),
  SUCCESS_POST: post => ({ post }),
  FAILURE_POST: error => ({ error }),

  // ブログのアイキャッチ
  REQUEST_EYE_CATCH: assetId => ({ assetId }),
  SUCCESS_EYE_CATCH: eyeCatch => ({ eyeCatch }),
  FAILURE_EYE_CATCH: error => ({ error }),
});
