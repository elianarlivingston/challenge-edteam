import React, { useState } from 'react';
import PropTypes from 'prop-types';
import postService from '../../services/post';

import Button from '../ui/Button';

const Actions = ({ id, likes, fetchPost }) => {
  const [like, setLike] = useState(likes);

  const toggleLike = () => {
    postService.like({ id, likes }).then((data) => {
      setLike(data.likes);
      fetchPost();
    });
  };

  return (
    <nav className="mt-4">
      <Button handlerClick={toggleLike} text="Likes" icon="far fa-thumbs-up" content={like} />
    </nav>
  );
};

Actions.propTypes = {
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
};

export default Actions;
