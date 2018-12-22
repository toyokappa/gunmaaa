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
        createdAt: repo.created_at,
        pushedAt: repo.pushed_at,
      })
  );

  const reposMap = repoModels.reduce(
    (map, repo) => map.set(repo.pushed_at, repo),
    OrderedMap()
  );
  return reposMap;
}

export default handleActions(
  {
    [rootActions.requestGithub]: state => ({
      ...state,
      isFetching: true,
    }),

    [rootActions.successGithub]: (state, { payload }) => ({
      ...state,
      github: new GithubModel(getReposFromApi(payload.repos)),
      error: null,
      isFetching: false,
    }),

    [rootActions.requestGithub]: (state, { payload }) => ({
      ...state,
      github: new GithubModel(),
      error: payload,
      isFetching: false,
    }),
  },
  defaultState
);
