import { OrderedMap, Record } from 'immutable';

const BlogRecord = Record({
  posts: OrderedMap(),
});

export default class Blog extends BlogRecord {}
