import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Species = ({url}) => {
    const [data4, setData4] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data4 => setData4(data4))
    }, [url])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Text className='Card_Text'>Nombre: {data4.name}</Card.Text>
                <Card.Text className='Card_Text'>Clasificacion: {data4.classification}</Card.Text>
                <Card.Text className='Card_Text'>Designación: {data4.designation}</Card.Text>
                <Card.Text className='Card_Text'>Altura Media: {data4.average_height}</Card.Text>
            </Card>
        </div>
    )
}

export default Species