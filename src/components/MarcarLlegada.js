import React, { useState } from 'react';

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
      setMessage('Acceso correcto');
    } else {
      setMessage('PIN incorrecto');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Marcar Llegada</h2>
      <input
        type="text"
        placeholder="Ingresa tu PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleCheckIn} style={styles.button}>
        Registrar
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  input: { padding: '10px', margin: '10px 0', width: '80%' },
  button: { padding: '10px 20px', backgroundColor: '#FFA500', color: '#fff' },
};

export default MarcarLlegada;
