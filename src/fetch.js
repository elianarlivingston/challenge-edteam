const apiUrl = 'https://challenge-edteam-json-server.herokuapp.com';

export default (url, options = {}) =>
  fetch(`${apiUrl}/${url}`, {
    ...options,
    headers: { ...options.headers, 'Content-Type': 'application/json' },
  }).then((res) => res.json());
