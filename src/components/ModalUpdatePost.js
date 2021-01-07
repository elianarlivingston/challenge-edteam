import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import postService from '../services/post';
import FormPost from './FormPost';
import Modal from './Modal';
import Button from './ui/Button';

const ModalUpdatePost = ({
  title,
  username,
  email,
  content,
  images,
  likes,
  id,
  video,
  fetchPost,
}) => {
  const modalUpdate = useRef(null);

  const toggleModal = () => {
    modalUpdate.current.classList.toggle('hidden');
  };

  const [post, setPost] = useState({
    username,
    email,
    title,
    content,
    images,
    video,
    likes,
  });

  const updatePost = (e) => {
    e.preventDefault();
    postService.update({ ...post, id }).then(() => {
      fetchPost();
      toggleModal();
    });
  };

  return (
    <>
      <Modal
        reference={modalUpdate}
        iconButton="far fa-edit"
        showModal={() => toggleModal(modalUpdate)}
      >
        <header className="flex justify-between align-center">
          <h4>Actualizar publicación</h4>
          <Button
            icon="fas fa-times text-color-dark"
            handlerClick={() => toggleModal(modalUpdate)}
          />
        </header>
        <FormPost
          post={post}
          setPost={setPost}
          handlerSubmit={updatePost}
          textButton="Guardar cambios"
        />
      </Modal>
    </>
  );
};

ModalUpdatePost.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  likes: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
};

export default ModalUpdatePost;
