import React from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import Avatar from './Avatar';
import Gallery from './Gallery';
import TextAccordion from './TextAccordion';
import ModalUpdatePost from '../ModalUpdatePost';
import ModalDeletePost from '../ModalDeletePost';

const Post = ({ title, username, email, content, images, likes, id, video, fetchPost }) => (
  <article className="m-card">
    <header>
      <div className="flex justify-end">
        <ModalUpdatePost
          title={title}
          username={username}
          email={email}
          content={content}
          images={images}
          likes={likes}
          id={id}
          video={video}
          fetchPost={fetchPost}
        />
        <ModalDeletePost id={id} fetchPost={fetchPost} />
      </div>
      <h2>{title}</h2>
    </header>
    <Avatar username={username} email={email} />
    <TextAccordion content={content} />
    {images && images.length ? <Gallery images={images} /> : ''}
    <Actions likes={likes} id={id} fetchPost={fetchPost} />
  </article>
);

Post.propTypes = {
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

export default Post;
