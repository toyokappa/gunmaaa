import { Record } from 'immutable';

const PostRecord = Record({
  id: null,
  slug: '',
  title: '',
  description: '',
  body: '',
  eyeCatchUrl: '',
  tags: [],
  createdAt: '',
  updatedAt: '',
});

export default class Post extends PostRecord {}
