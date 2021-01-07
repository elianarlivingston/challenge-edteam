import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextAccordion = ({ content }) => {
  const [truncate, setTruncate] = useState(() => {
    if (content.length <= 200) {
      return content;
    }
    return `${content.slice(0, 200)}...`;
  });

  const handlerClick = () =>
    truncate.length <= 200 + 3 ? setTruncate(content) : setTruncate(`${content.slice(0, 200)}...`);

  if (content <= 200) return <div>{truncate}</div>;

  return (
    <p className="text-setting">
      {content.length <= 200 ? (
        truncate
      ) : (
        <>
          {truncate}
          <button type="button" onClick={handlerClick} className="a-btn">
            {truncate.length <= 203 ? 'Ver más' : 'Ver menos'}
          </button>
        </>
      )}
    </p>
  );
};

TextAccordion.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TextAccordion;
