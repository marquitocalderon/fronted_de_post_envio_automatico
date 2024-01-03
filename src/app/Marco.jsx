"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Marco() {
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

  useEffect(() => {
    fetchData();
    console.log("Fetched");
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  return (
    // Your component JSX here
    <div>
      marco
    </div>
  );
}
