import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const FormularioEmpleado = () => {
  const { pin } = useParams();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: '',
    celular: '',
    cedula: '',
    direccion: '',
    area: '',
    pin: '',
    historial: [],
  });

  useEffect(() => {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    if (pin) {
      const emp = empleados.find(e => e.pin === pin);
      if (emp) setEmpleado(emp);
    }
  }, [pin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    if (pin) {
      const updated = empleados.map(e => (e.pin === pin ? empleado : e));
      localStorage.setItem('empleados', JSON.stringify(updated));
    } else {
      localStorage.setItem('empleados', JSON.stringify([...empleados, empleado]));
    }
    navigate('/empleados');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{pin ? 'Editar Empleado' : 'Agregar Empleado'}</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={empleado.nombre}
        onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Celular"
        value={empleado.celular}
        onChange={(e) => setEmpleado({ ...empleado, celular: e.target.value })}
      />
      <input
        type="text"
        placeholder="Cédula"
        value={empleado.cedula}
        onChange={(e) => setEmpleado({ ...empleado, cedula: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dirección"
        value={empleado.direccion}
        onChange={(e) => setEmpleado({ ...empleado, direccion: e.target.value })}
      />
      <input
        type="text"
        placeholder="Área"
        value={empleado.area}
        onChange={(e) => setEmpleado({ ...empleado, area: e.target.value })}
      />
      <input
        type="text"
        placeholder="PIN"
        value={empleado.pin}
        onChange={(e) => setEmpleado({ ...empleado, pin: e.target.value })}
        disabled={!!pin}
      />
      <button type="submit">{pin ? 'Guardar Cambios' : 'Agregar'}</button>
    </form>
  );
};

export default FormularioEmpleado;
