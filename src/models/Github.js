import { OrderedMap, Record } from 'immutable';

const GithubRecord = Record({
  repos: OrderedMap(),
});

export default class Github extends GithubRecord {}
