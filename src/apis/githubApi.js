import axios from 'axios';

const apiBase = 'https://api.github.com/';
const userName = 'toyokappa';
const params = '?sort=updated';

// eslint-disable-next-line import/prefer-default-export
export function getRepos() {
  const url = `${apiBase}users/${userName}/repos${params}`;
  axios
    .get(url)
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
