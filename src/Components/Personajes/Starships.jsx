import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'

const Starships = ({ url }) => {
    const [data3, setData3] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data3 => setData3(data3))
    }, [url])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Text className='Card_Text'>Nombre: {data3.name}</Card.Text>
                <Card.Text className='Card_Text'>Modelo: {data3.model}</Card.Text>
                <Card.Text className='Card_Text'>Fabricante: {data3.manufacturer}</Card.Text>
                <Card.Text className='Card_Text'>Costo en Créditos: {data3.cost_in_credits}</Card.Text>
            </Card>
        </div>
    )
}

export default Starships