
import React from 'react';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://worldtimeapi.org/api/timezone/America/Lima');
    const hora = response.data.utc_datetime;
    console.log('UTC Hora:', hora);

  } catch (error) {
    console.error('Error fetching data:', error.message);
    alert('Error fetching data');
  }
};
export default function Page() {


fetchData();
const interval = setInterval(fetchData, 30000); // 30 segundos


  return (
    // Your component JSX here
    <div>
      marco
    </div>
  );
}
