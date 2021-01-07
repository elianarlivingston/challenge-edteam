import fetch from '../fetch';

const { v4: uuidv4 } = require('uuid');

const postService = {
  getOne(id) {
    return fetch(`posts/${id}`);
  },

  getAll() {
    return fetch('posts').then((posts) =>
      posts.map((post) => ({ ...post, likes: post.likes || 0 })).reverse()
    );
  },

  create({ username, email, title, content, images, video }) {
    const body = {
      username,
      email,
      title,
      content,
      images,
      video,
      id: uuidv4(),
    };
    return fetch('posts', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  update({ id, username, email, title, content, images, video }) {
    const body = {
      username,
      email,
      title,
      content,
      images,
      video,
    };
    return fetch(`posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  },

  delete(id) {
    return fetch(`posts/${id}`, { method: 'DELETE' });
  },

  like({ id, likes }) {
    const newLike = likes + 1;
    return fetch(`posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ likes: newLike }),
    });
  },
};

export default postService;
