import { OrderedMap } from 'immutable';
import { handleActions } from 'redux-actions';

import GithubModel from '../models/Github';
import RepoModel from '../models/Repo';
import rootActions from '../actions';

const defaultState = {
  github: new GithubModel(),
  error: null,
  isFetching: false,
};

function getReposFromApi(repos) {
  const repoModels = repos.map(
    repo =>
      new RepoModel({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        forks_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        subscribers_count: repo.subscribers_count,
        createdAt: repo.created_at,
        pushedAt: repo.pushed_at,
      })
  );

  const reposMap = repoModels.reduce(
    (map, repo) => map.set(repo.pushedAt, repo),
    OrderedMap()
  );

  // プッシュした日付の降順でソート
  const sortedReposMap = reposMap.sortBy((_v, k) => k).reverse();
  return sortedReposMap;
}

export default handleActions(
  {
    [rootActions.requestGithub]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successGithub]: (state, { payload }) => ({
      ...state,
      github: new GithubModel({ repos: getReposFromApi(payload.repos.data) }),
      error: null,
      isFetching: false,
    }),

    [rootActions.failureGithub]: (state, { payload }) => ({
      ...state,
      github: new GithubModel(),
      error: payload,
      isFetching: false,
    }),
  },
  defaultState
);
