import axios from 'axios';

const apiBase = 'https://api.github.com/';
const userName = 'toyokappa';

// eslint-disable-next-line import/prefer-default-export
export function getRepos() {
  const url = `${apiBase}users/${userName}/repos`;
  return axios
    .get(url)
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
