import React from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => (
  <div className="m-container-gallery">
    <figure className={`m-gallery m-gallery-${images.length}`}>
      {images
        .map((img, index) => ({ id: index, img }))
        .map((item) => (
          <img src={item.img} alt="gallery" key={item.id} />
        ))}
    </figure>
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
