import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import postService from '../services/post';
import FormPost from './FormPost';
import Modal from './Modal';
import Button from './ui/Button';

const ModalCreatePost = ({ fetchPost }) => {
  const modalCreate = useRef(null);

  const toggleModal = () => {
    modalCreate.current.classList.toggle('hidden');
  };

  const [post, setPost] = useState({
    username: null,
    email: null,
    title: null,
    content: null,
    images: [],
    video: [],
    likes: 0,
  });

  const createPost = (e) => {
    e.preventDefault();
    postService.create(post).then(() => {
      fetchPost();
      toggleModal(modalCreate);
    });
  };

  return (
    <>
      <Modal
        reference={modalCreate}
        textButton="Crear publicación"
        iconButton="fas fa-plus"
        showModal={() => toggleModal(modalCreate)}
        classesButton="flex w-full my-2  o-container"
      >
        <header className="flex justify-between align-center">
          <h4>Crear publicación</h4>
          <Button
            icon="fas fa-times text-color-dark"
            handlerClick={() => toggleModal(modalCreate)}
          />
        </header>
        <FormPost
          post={post}
          setPost={setPost}
          handlerSubmit={createPost}
          textButton="Crear publicación"
        />
      </Modal>
    </>
  );
};

ModalCreatePost.propTypes = {
  fetchPost: PropTypes.func.isRequired,
};

export default ModalCreatePost;
