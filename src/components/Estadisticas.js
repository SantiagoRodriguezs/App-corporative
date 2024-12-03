import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
    <StyledWrapper>
      <div className="card">
        <div className="card__content">
          <h2>Estadísticas</h2>
          <p>Empleados ingresados entre 7:00 AM y 7:30 AM: <span>{stats.count}</span></p>
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
    justify-content: center;
    text-align: center;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    font-weight: normal;
  }

  span {
    font-size: 22px;
    font-weight: bold;
    color: #ffff  
  }
`;

export default Estadisticas;
