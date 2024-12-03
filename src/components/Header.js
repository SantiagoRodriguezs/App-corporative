import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Archivo de estilos para el diseño del header

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Espacio para el logo */}
        <img src="/img/logo_empresa.png" alt="Logo Empresa" />
      </div>
      <nav className="nav-links">
        <Link to="/marcar-llegada">Marcar Llegada</Link>
        <Link to="/empleados">Empleados</Link>
        <Link to="/incapacidades-permisos">Incapacidades/Permisos</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </nav>
    </header>
  );
};

export default Header;
