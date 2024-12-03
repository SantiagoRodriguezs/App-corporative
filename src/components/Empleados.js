import React from 'react';
import { Link } from 'react-router-dom';
import ExportarExcel from "../utils/ExcelUtils";
import styled from 'styled-components';

export const Empleados = () => {
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];

  const eliminarEmpleado = (pin) => {
    const actualizados = empleados.filter(e => e.pin !== pin);
    localStorage.setItem('empleados', JSON.stringify(actualizados));
    window.location.reload(); // Recargar para mostrar la lista actualizada
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>Empleados</h2>
          <Link to="/empleados/agregar">
            <button className="button">Agregar Empleado</button>
          </Link>
          <table className="empleados-table">
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
              {empleados.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>No hay empleados registrados</td>
                </tr>
              ) : (
                empleados.map((e, index) => (
                  <tr key={index}>
                    <td>{e.nombre}</td>
                    <td>{e.celular}</td>
                    <td>{e.cedula}</td>
                    <td>{e.direccion}</td>
                    <td>{e.area}</td>
                    <td>{e.pin}</td>
                    <td>
                      <Link to={`/empleados/editar/${e.pin}`}>
                        <button className="button">Editar</button>
                      </Link>
                      <button className="button" onClick={() => eliminarEmpleado(e.pin)}>
                        Eliminar
                      </button>
                      <Link to={`/empleados/historial/${e.pin}`}>
                        <button className="button">Ver Historial</button>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div>
            <h1>Lista de empleados</h1>
            <ExportarExcel />
          </div>
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
    width: 940px;
    height: auto;
    background: #fc243c; /* Color de fondo de la tarjeta */
    box-shadow: #fc243c 0 15px 40px -5px;
    z-index: 1;
    border-radius: 21px;
    padding: 20px;
    box-sizing: border-box;
  }

  .card__content {
    z-index: 1;
    backdrop-filter: blur(20px);
    position: relative; /* Cambié de absolute a relative para que se ajuste mejor al contenido */
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 21px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Alinea el contenido al inicio */
    text-align: center;
  }

  .empleados-table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    transition: all 0.3s ease; /* Transición suave */
    max-height: 300px; /* Limitar la altura */
    overflow-y: auto; /* Permite desplazamiento si excede el alto máximo */
  }

  .empleados-table th,
  .empleados-table td {
    padding: 10px;
    border: 1px solid #ddd;
  }

  .button {
    padding: 10px 20px;
    background-color: #e62138;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    box-shadow: #000 0 15px 40px -5px;
    margin: 5px;
  }

  .button:hover {
    background-color: #a50013;
  }
`;

export default Empleados;
