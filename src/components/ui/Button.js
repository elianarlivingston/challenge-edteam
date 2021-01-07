import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ handlerClick, icon, text, content, classes, submit = false }) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={handlerClick}
    className={`a-btn a-btn--active cursor-pointer ${classes}`}
  >
    {icon ? <span className={icon} /> : ''}
    {text ? <span className="px-2">{text}</span> : ''}
    {content !== null ? content : ''}
  </button>
);

Button.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  content: PropTypes.number.isRequired,
  classes: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
};

export default Button;
