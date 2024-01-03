"use client"
import React from 'react';
import axios from 'axios';


export default function Page() {

 const fetchData = async () => {
    try {
      const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Lima');
      const hora = response.data.utc_datetime;
      console.log('UTC Hora:', hora);

  
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  fetchData(); // Llamar a fetchData cuando el componente se monta
  const interval = setInterval(fetchData, 10000); // Llamar a fetchData cada 10 segundos
  alert("se envio cada 10 segundos")


  return (
    // Your component JSX here
    <div>
      marco
    </div>
  );
}
