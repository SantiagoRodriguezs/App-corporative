import React, { useState } from 'react';
import styled from 'styled-components';

export const MarcarLlegada = () => {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckIn = () => {
    const empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    const empleado = empleados.find(e => e.pin === pin);

    if (empleado) {
      const llegada = { fecha: new Date().toISOString() };
      empleado.historial = [...(empleado.historial || []), llegada];
      localStorage.setItem('empleados', JSON.stringify(empleados));
      setMessage('ACCESO CORRECTO');
    } else {
      setMessage('PIN INCORRECTO');
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>Marcar Llegada</h2>
          <input
            type="text"
            placeholder="Ingresa tu PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="input"
          />
          <button onClick={handleCheckIn} className="button">
            Registrar
          </button>
          {message && <p className="message">{message}</p>}
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
    width: 500px;
    height: 300px;
    background: #fc243c; /* Nuevo color de fondo */
    box-shadow: #fc243c 0 15px 40px -5px;
    z-index: 1;
    border-radius: 21px;
  }

  .card__content {
    z-index: 1;
    backdrop-filter: blur(20px);
    position: absolute;
    left: 0;
    top: 0;
    color: #ffff;
    width: 100%;
    height: 100%;
    border-radius: 21px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .input {
    padding: 10px;
    margin: 10px 0;
    width: 90%;
    border-radius: 5px;
    background-color: #e62138;
    border: none;
    font-size: 14px;
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
    box-shadow: #black 0 15px 40px -5px;
  }

  .button:hover {
    background-color: #a50013;
  }

  .message {
    margin-top: 10px;
    font-size: 12px;
    font-weight: bold
    color: #fff;
  }
`;
export default MarcarLlegada;
