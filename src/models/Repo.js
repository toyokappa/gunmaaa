import { Record } from 'immutable';

const RepoRecord = Record({
  id: null,
  name: '',
  fullName: '',
  description: '',
  url: '',
  language: '',
  forks_count: 0,
  stargazers_count: 0,
  watchers_count: 0,
  createdAt: null,
  pushedAt: null,
});

export default class Repo extends RepoRecord {}
