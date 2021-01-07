import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ handlerChange, reference }) => (
  <input type="checkbox" className="switch" onChange={handlerChange} ref={reference} />
);
Switch.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  reference: PropTypes.string.isRequired,
};
export default Switch;
