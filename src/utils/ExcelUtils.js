import React from "react";
import * as XLSX from "xlsx";
import styled from 'styled-components';

const ExportarExcel = () => {
  const exportar = () => {
    const empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    if (empleados.length === 0) {
      alert("No hay empleados para exportar.");
      return;
    }

    const datosExcel = empleados.map((e) => ({
      Nombre: e.nombre,
      Celular: e.celular,
      Cédula: e.cedula,
      Dirección: e.direccion,
      Área: e.area,
      PIN: e.pin,
    }));

    const hoja = XLSX.utils.json_to_sheet(datosExcel);
    const libro = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(libro, hoja, "Empleados");
    XLSX.writeFile(libro, "Listado_Empleados.xlsx");
  };

  return <Button onClick={exportar}>Exportar a Excel</Button>;
};

const Button = styled.button`
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

  &:hover {
    background-color: #a50013;
  }
`;

export default ExportarExcel;
