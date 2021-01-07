import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './ui/Button';

const NavForm = ({ files, setFiles, textButton }) => {
  const zone = useRef(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const addImage = async (file) => {
    const fileBase64 = await toBase64(file);
    if (files.length < 5) {
      setFiles(files.concat(fileBase64));
    }
  };

  const removeImage = (index) => {
    if (index > files.length) {
      return;
    }

    const newFiles = files.filter((file, i) => i !== index);
    setFiles(newFiles);
  };

  const handlerChangeInputImage = (e) => {
    addImage(e.target.files[0]);
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
  };

  const handlerDrop = (e) => {
    e.preventDefault();
    addImage(e.dataTransfer.files[0]);
  };

  return (
    <footer>
      <ul className="o-ui-list o-ui-list--horizontal px-2">
        {files
          .map((file, index) => ({ id: index, file }))
          .map((item) => (
            <li className="publication-photo" key={item.id}>
              <button
                className="publication-photo__close"
                type="button"
                onClick={() => removeImage(item.id)}
              >
                <span className="fas fa-times" />
              </button>
              <img
                src={item.file}
                alt="Seleccionadas por el usuario"
                className="publication-photo__img"
              />
            </li>
          ))}

        <li
          className="publication-photo publication-photo--add z-1 flex justify-center"
          ref={zone}
          onDragOver={handlerDragOver}
          onDrop={handlerDrop}
          draggable="true"
        >
          <input
            type="file"
            accept="image/png, image/jpeg, image.jpg"
            className="input-file__input z-2 cursor-pointer"
            onChange={handlerChangeInputImage}
          />
          <span className="fas fa-plus" style={{ position: 'absolute' }} />
        </li>
      </ul>

      <nav className="flex justify-between mt-4">
        <div className="input-file__group">
          <input
            type="file"
            accept="image/png, image/jpeg, image.jpg"
            className="input-file__input cursor-pointer"
            onChange={handlerChangeInputImage}
          />
          <span className="far fa-images input-file__icon" />
        </div>
        <Button submit="true" text={textButton} classes="text-color-dark" />
      </nav>
    </footer>
  );
};

NavForm.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiles: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
};

export default NavForm;
