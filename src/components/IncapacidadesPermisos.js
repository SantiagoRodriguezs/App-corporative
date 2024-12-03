import React, { useState } from 'react';
import styled from 'styled-components';

export const IncapacidadesPermisos = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map(file => URL.createObjectURL(file));
    setImages(imagesArray); // Guardamos las imágenes en el estado
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>Incapacidades y Permisos</h2>

          {/* Mostrar imágenes cargadas */}
          <div className="image-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`preview-${index}`} className="preview-image" />
            ))}
          </div>

          {/* Botón para seleccionar archivos */}
          <InputFile type="file" multiple onChange={handleUpload} />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .card {
    position: relative;
    width: 500px;
    background: #fc243c;
    box-shadow: #fc243c 0 15px 40px -5px;
    z-index: 1;
    border-radius: 21px;
    padding: 20px;
    box-sizing: border-box;
  }

  .card__content {
    z-index: 1;
    backdrop-filter: blur(20px);
    position: relative;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 21px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }

  h2 {
    margin-bottom: 20px;
  }

  .image-preview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .preview-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin: 5px;
    border-radius: 10px;
  }
`;

const InputFile = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  border-radius: 5px;
  background-color: #e62138;
  border: none;
  font-size: 14px;
  color: white;

  ::file-selector-button {
    background-color: #e62138;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
  }

  ::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #a50013;
  }
`;

export default IncapacidadesPermisos;
