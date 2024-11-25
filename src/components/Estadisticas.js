import React, { useEffect, useState } from 'react';

export const Estadisticas = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const count = empleados.filter(emp =>
      emp.historial?.some(h => {
        const hora = new Date(h.fecha).getHours();
        return hora === 7 || (hora === 7 && new Date(h.fecha).getMinutes() <= 30);
      })
    ).length;

    setStats({ count });
  }, []);

  return (
    <div>
      <h2>Estadísticas</h2>
      <p>Empleados ingresados entre 7:00 AM y 7:30 AM: {stats.count}</p>
    </div>
  );
};

export default Estadisticas;
