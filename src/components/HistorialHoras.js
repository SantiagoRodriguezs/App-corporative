import React from 'react';
import { useParams } from 'react-router-dom';
import * as XLSX from "xlsx";
import styled from "styled-components";

export const HistorialHoras = () => {
  const { pin } = useParams();
  const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
  const empleado = empleados.find(e => e.pin === pin);

  // Función para exportar los empleados a Excel
  const exportarExcel = () => {
    if (empleados.length === 0) {
      alert("No hay empleados para exportar.");
      return;
    }

    // Convertir los empleados a formato compatible con Excel
    const datosExcel = empleados.map((empleado) => ({
      Nombre: empleado.nombre,
      PIN: empleado.pin,
      Historial: empleado.historial
        ? empleado.historial.map((h) => new Date(h.fecha).toLocaleString()).join("; ")
        : "Sin historial",
    }));

    const hoja = XLSX.utils.json_to_sheet(datosExcel);
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Empleados");
    XLSX.writeFile(libro, "Listado_Empleados.xlsx");
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>Historial de {empleado?.nombre || 'Empleado'}</h2>
          <ul className="historial-lista">
            {empleado?.historial?.map((h, index) => (
              <li key={index}>
                Fecha: {new Date(h.fecha).toLocaleString()}
              </li>
            )) || <p>No hay historial disponible</p>}
          </ul>
          <button className="button" onClick={exportarExcel}>
            Exportar a Excel
          </button>
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
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  .historial-lista {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .historial-lista li {
    background-color: #e62138;
    color: #fff;
    font-weight: bold;
    width: 70%;
    border: none;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
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
    margin-top: 20px;
  }

  .button:hover {
    background-color: #a50013;
  }
`;

export default HistorialHoras;
