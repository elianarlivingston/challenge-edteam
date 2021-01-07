// const apiUrl = proccess.env.REACT_APP_API_URL;
const apiUrl = 'http://localhost:3333';

export default (url, options = {}) =>
  fetch(`${apiUrl}/${url}`, {
    ...options,
    headers: { ...options.headers, 'Content-Type': 'application/json' },
  }).then((res) => res.json());
