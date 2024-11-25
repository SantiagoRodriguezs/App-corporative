import React from 'react';

export const IncapacidadesPermisos = () => {
  const handleUpload = (e) => {
    const files = e.target.files;
    console.log('Archivos subidos:', files);
  };

  return (
    <div>
      <h2>Incapacidades y Permisos</h2>
      <input type="file" multiple onChange={handleUpload} />
    </div>
  );
};

export default IncapacidadesPermisos;
