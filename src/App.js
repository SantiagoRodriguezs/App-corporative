import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MarcarLlegada from './components/MarcarLlegada';
import Empleados from './components/Empleados';
import IncapacidadesPermisos from './components/IncapacidadesPermisos';
import Estadisticas from './components/Estadisticas';
import FormularioEmpleado from './components/FormularioEmpleado';
import HistorialHoras from './components/HistorialHoras';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/marcar-llegada" element={<MarcarLlegada />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/empleados/agregar" element={<FormularioEmpleado />} />
        <Route path="/empleados/editar/:pin" element={<FormularioEmpleado />} />
        <Route path="/empleados/historial/:pin" element={<HistorialHoras />} />
        <Route path="/incapacidades-permisos" element={<IncapacidadesPermisos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
      </Routes>
    </Router>
  );
};

export default App;
