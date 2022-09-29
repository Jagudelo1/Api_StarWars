import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Vehicles = ({ url }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setData(data))
  }, [url])

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Text className='Card_Text'>Nombre: {data.name}</Card.Text>
        <Card.Text className='Card_Text'>Modelo: {data.model}</Card.Text>
        <Card.Text className='Card_Text'>Pasajeros: {data.passengers}</Card.Text>
        <Card.Text className='Card_Text'>Capacidad máxima: {data.cargo_capacity}</Card.Text>
      </Card>
    </div>
  )
}

export default Vehicles
