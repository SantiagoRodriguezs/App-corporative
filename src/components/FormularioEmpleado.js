import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>{pin ? 'Editar Empleado' : 'Agregar Empleado'}</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nombre"
              value={empleado.nombre}
              onChange={(e) => setEmpleado({ ...empleado, nombre: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Celular"
              value={empleado.celular}
              onChange={(e) => setEmpleado({ ...empleado, celular: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Cédula"
              value={empleado.cedula}
              onChange={(e) => setEmpleado({ ...empleado, cedula: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Dirección"
              value={empleado.direccion}
              onChange={(e) => setEmpleado({ ...empleado, direccion: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Área"
              value={empleado.area}
              onChange={(e) => setEmpleado({ ...empleado, area: e.target.value })}
            />
            <Input
              type="text"
              placeholder="PIN"
              value={empleado.pin}
              onChange={(e) => setEmpleado({ ...empleado, pin: e.target.value })}
              disabled={!!pin}
            />
            <Button type="submit">{pin ? 'Guardar Cambios' : 'Agregar'}</Button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  .card {
    position: relative;
    width: 500px;
    background: #fc243c;
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
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 90%;
  border-radius: 5px;
  background-color: #e62138;
  border: none;
  font-size: 14px;
  color: white;

  ::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    background-color: #a50013;
  }
`;

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
  margin-top: 10px;

  &:hover {
    background-color: #a50013;
  }
`;

export default FormularioEmpleado;
