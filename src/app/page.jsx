import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const fetchData = async () => {
  try {
    const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Lima');
    const hora = response.data.utc_datetime;
    console.log('UTC Hora:', hora);

    const response2 = await axios.post('https://backend-prueba-envio.onrender.com/enviar',{nombre:"enviando desde el servidor", hora:hora});
    console.log("datos enviando", response2)

  } catch (error) {
    console.error('Error en el progreso:', error.message);
  }
};

export default function Page() {
  fetchData();

  const interval = setInterval(fetchData, 10000); // 30 seconds

  return (
    // Your component JSX here
    <div>
      marco
    </div>
  );
}
