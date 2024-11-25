import React from 'react';
import { Link } from 'react-router-dom';

export const Empleados = () => {
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  const eliminarEmpleado = (pin) => {
    const actualizados = empleados.filter(e => e.pin !== pin);
    localStorage.setItem('empleados', JSON.stringify(actualizados));
    window.location.reload(); // Recargar para mostrar la lista actualizada
  };

  return (
    <div>
      <h2>Empleados</h2>
      <Link to="/empleados/agregar">
        <button>Agregar Empleado</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Cédula</th>
            <th>Dirección</th>
            <th>Área</th>
            <th>PIN</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((e, index) => (
            <tr key={index}>
              <td>{e.nombre}</td>
              <td>{e.celular}</td>
              <td>{e.cedula}</td>
              <td>{e.direccion}</td>
              <td>{e.area}</td>
              <td>{e.pin}</td>
              <td>
                <Link to={`/empleados/editar/${e.pin}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => eliminarEmpleado(e.pin)}>Eliminar</button>
                <Link to={`/empleados/historial/${e.pin}`}>
                  <button>Ver Historial</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Empleados;
