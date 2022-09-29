import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const Films = ({url}) => {

    const [ data2, setData2 ] = useState([])

    useEffect(() =>{
        fetch(url).then(res => res.json()).then(data2 => setData2(data2))
    },[url])
    
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Text className='Card_Text'>Creado: {data2.created}</Card.Text>
        <Card.Text className='Card_Text'>Director: {data2.director}</Card.Text>
        <Card.Text className='Card_Text'>Editado: {data2.edited}</Card.Text>
        <Card.Text className='Card_Text'>Episodio: {data2.episode_id}</Card.Text>
      </Card>
    </div>
  )
}

export default Films