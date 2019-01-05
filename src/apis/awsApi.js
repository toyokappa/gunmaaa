import axios from 'axios';

const apiBase =
  'https://lua4kqovyh.execute-api.ap-northeast-1.amazonaws.com/v1/';

export default function postInquiry(params) {
  const url = `${apiBase}inquiries`;
  const { name, email, category, content } = params;
  return axios
    .post(url, {
      inquiry: {
        name,
        email,
        category,
        content,
      },
    })
    .then(payload => ({ payload }))
    .catch(error => ({ error }));
}
