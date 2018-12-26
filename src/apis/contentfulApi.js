import axios from 'axios';

const apiBase = 'https://cdn.contentful.com/';
const spaceId = 'rlz1oc4sgyfk';
const accessToken =
  'f5dfdf9b1672f3cbbf5030c269fff9d9a0b349ed42a2a66b3d56ed747185603a';

export function getEntries() {
  const url = `${apiBase}spaces/${spaceId}/entries`;
  return axios
    .get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}

export function getEntriesWithTag(tag) {
  const url = `${apiBase}spaces/${spaceId}/entries?content_type=blogPost&fields.tags=${tag}`;
  return axios
    .get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}

export function getEntry(slug) {
  const url = `${apiBase}spaces/${spaceId}/entries?content_type=blogPost&fields.slug=${slug}`;
  return axios
    .get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(res => res.data.items[0])
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}

export function getAsset(assetId) {
  const url = `${apiBase}spaces/${spaceId}/assets/${assetId}`;
  return axios
    .get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
