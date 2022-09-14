import React, { useEffect, useState } from 'react';
import { FooterApp } from '../FooterApp/FooterApp';
import { NavbarApp } from '../NavbarApp/NavbarApp';
import { unicoPersonaje } from '../Hooks/FuncionesPerson';
import { useParams } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Personajes from '../Img/Personaje.jpg'
import '../Hooks/Detalles.css';

export const DetallePersonaje = () => {
  const [ data, setData ] = useState([]);

  const idByParams = useParams();
  const personaje = unicoPersonaje(idByParams.name);

  useEffect(() => { personaje.then(res => setData(res)) }, []);

  return (
    <div>
      <NavbarApp />
      <button className='boton_atras'>
        <a href='../Personajes'> <FaReply size={30} /></a>
      </button>
      <div className='Detalles_person'>
        <div className='CardDetalle'>
          <Card style={{ width: '22rem' }}>
            <Card.Img src={Personajes} className='front' />
          </Card>
        </div>
        <div className='detalles'>
          <h6>Nombre: <span>{data.name}</span></h6>
          <h6>Altura: <span>{data.height}</span></h6>
          <h6>Masa: <span>{data.mass}</span></h6>
          <h6>Color de Pelo: <span>{data.hair_color}</span></h6>
          <h6>Color de Piel: <span>{data.skin_color}</span></h6>
          <h6>Color de Ojos: <span>{data.eye_color}</span></h6>
          <h6>Cumpleaños:  <span>{data.birth_year}</span></h6>
          <h6>Genero: <span>{data.gender}</span></h6>
        </div>
      </div>

      <div className='tajetasdetalle'>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text>N/A</Card.Text>
          </Card>
        </div>
      </div>
      <FooterApp />
    </div>
  )
}
