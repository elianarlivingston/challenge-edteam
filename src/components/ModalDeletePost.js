import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import postService from '../services/post';
import Modal from './Modal';
import Button from './ui/Button';

const ModalDeletePost = ({ id, fetchPost }) => {
  const deleteModal = useRef(null);

  const toggleModal = () => {
    deleteModal.current.classList.toggle('hidden');
  };

  const deletePost = (e) => {
    e.preventDefault();

    postService.delete(id).then(() => {
      fetchPost();
      toggleModal();
    });
  };

  return (
    <Modal
      reference={deleteModal}
      iconButton="far fa-trash-alt"
      showModal={toggleModal}
      classes="modal__content---delete"
    >
      <div className="flex flex-column justify-center align-center">
        <header>
          <h4>Eliminar post</h4>
        </header>
        <p>Está seguro que desea eliminar el post?</p>
      </div>
      <div className="flex justify-end">
        <Button handlerClick={toggleModal} text="Cancelar" classes="rounded-2 mr-2" />
        <Button
          text="Eliminar"
          submit="true"
          handlerClick={deletePost}
          classes="text-color-danger bg-color-danger rounded-2"
        />
      </div>
    </Modal>
  );
};

ModalDeletePost.propTypes = {
  id: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
};

export default ModalDeletePost;
