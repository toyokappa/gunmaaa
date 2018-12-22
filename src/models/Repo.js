import { Record } from 'immutable';

const RepoRecord = Record({
  id: null,
  name: '',
  fullName: '',
  description: '',
  url: '',
  createdAt: null,
  pushedAt: null,
});

export default class Repo extends RepoRecord {}
