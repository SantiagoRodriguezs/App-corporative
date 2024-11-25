import React from 'react';
import { useParams } from 'react-router-dom';

export const HistorialHoras = () => {
  const { pin } = useParams();
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
  const empleado = empleados.find(e => e.pin === pin);

  return (
    <div>
      <h2>Historial de {empleado?.nombre || 'Empleado'}</h2>
      <ul>
        {empleado?.historial?.map((h, index) => (
          <li key={index}>Fecha: {new Date(h.fecha).toLocaleString()}</li>
        )) || <p>No hay historial disponible</p>}
      </ul>
    </div>
  );
};

export default HistorialHoras;
