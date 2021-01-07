import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavForm from './NavForm';

const FormPost = ({ post, setPost, handlerSubmit, textButton }) => {
  const [files, setFiles] = useState(post.images);

  useEffect(() => {
    setPost({ ...post, images: files });
  }, [files]);

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <label htmlFor="username" className="input-group__wrapper">
        <span>Nombre de usuario</span>
        <div className="input-group">
          <input
            id="username"
            type="text"
            placeholder="Nombre tu email aquí"
            className="input-group__input"
            minLength="10"
            required
            value={post.username}
            onChange={(e) => setPost({ ...post, username: e.target.value })}
          />
          <span className="far fa-check-circle icon--validate pr-4" />
        </div>
      </label>

      <label htmlFor="email" className="input-group__wrapper">
        <span>Correo electrónico</span>
        <div className="input-group">
          <input
            type="email"
            placeholder="Escribe tu email aquí"
            id="email"
            className="input-group__input"
            required
            value={post.email}
            onChange={(e) => setPost({ ...post, email: e.target.value })}
          />
          <span className="far fa-check-circle icon--validate  pr-4" />
        </div>
      </label>

      <label htmlFor="title" className="input-group__wrapper">
        <span>Titulo</span>
        <div className="input-group">
          <input
            type="text"
            placeholder="Titulo de tu artículo"
            id="title"
            className="input-group__input weight-600 text-color-dark"
            minLength="10"
            required
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <span className="far fa-check-circle icon--validate  pr-4" />
        </div>
      </label>

      <div className="group-input my-2">
        <textarea
          minLength="20"
          required
          className="input-group__input overflow-scroll"
          placeholder="
        Cuentanos qué quieres publicar"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <span className="far fa-check-circle icon--validate block text-right pr-4" />
      </div>

      <NavForm files={files} setFiles={setFiles} textButton={textButton} />
    </form>
  );
};

FormPost.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.number)
    .isRequired,
  setPost: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};

export default FormPost;
