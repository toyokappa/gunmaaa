import { Record } from 'immutable';

const PostRecord = Record({
  id: null,
  slug: '',
  title: '',
  description: '',
  body: '',
  eyeCatchUrl: '',
  tags: [],
  createdAt: null,
  updatedAt: null,
});

export default class Post extends PostRecord {}
