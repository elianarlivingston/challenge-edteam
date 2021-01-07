import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from './ui/Button';

const Modal = ({
  children,
  reference,
  textButton,
  iconButton,
  showModal,
  classes,
  classesButton,
}) => (
  <>
    <Button text={textButton} icon={iconButton} handlerClick={showModal} classes={classesButton} />
    {ReactDOM.createPortal(
      <aside className="modal hidden" ref={reference}>
        <div className={`modal__content ${classes}`}>{children}</div>
      </aside>,
      document.getElementById('root')
    )}
  </>
);

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  reference: PropTypes.PropTypes.objectOf(PropTypes.string).isRequired,
  textButton: PropTypes.string.isRequired,
  iconButton: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  classesButton: PropTypes.string.isRequired,
};
export default Modal;
