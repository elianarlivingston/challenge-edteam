import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ username, email }) => {
  const avatarImageGenerate = (names) => {
    const arrayName = names.split(' ');
    const initials = arrayName.map((item) => item.slice(0, 1));
    return initials;
  };

  const initials = avatarImageGenerate(username);

  return (
    <div className="m-avatar">
      <figure className="m-avatar__image">
        <p className="m-avatar__initials">{initials}</p>
      </figure>
      <div className="m-avatar__content">
        <h3 className="a-fs-regular text-color-base pr-4">{username}</h3>
        <address>{email}</address>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Avatar;
