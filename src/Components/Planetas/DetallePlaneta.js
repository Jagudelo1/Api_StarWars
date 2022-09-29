import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaReply } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { FooterApp } from '../FooterApp/FooterApp';
import '../Hooks/Detalles.css';
import { unicoPlaneta } from '../Hooks/FuncionesPlanets';
import Endow from '../Img/Planetas/Endow.jpg';
import { NavbarApp } from '../NavbarApp/NavbarApp';

export const DetallePlaneta = () => {
  const [dato, setDato] = useState([]);

  const idParams = useParams();
  const planeta = unicoPlaneta(idParams.name);

  useEffect(() => { planeta.then(res => setDato(res)) }, []);

  return (
    <div>
      <NavbarApp />

      <button className='boton_atras'>
        <Link to='/Planetas'> <FaReply size={30} /></Link>
      </button>

      <div className='Detalles_person'>
        <div className='CardDetalle'>
          <Card style={{ width: '22rem' }}>
            <Card.Img src={Endow} className='front' />
          </Card>
        </div>
        <div className='detalles'>
          <h6>Nombre: {dato.name} </h6>
          <h6>Periodo de Rotacion: {dato.rotation_period} </h6>
          <h6>Peridoo Orbital: {dato.orbital_period} </h6>
          <h6>Diametro: {dato.diameter} </h6>
          <h6>Clima: {dato.climate} </h6>
          <h6>Gravedad: {dato.gravity} </h6>
          <h6>Terreno: {dato.terrain} </h6>
          <h6>Superficie del Agua: {dato.surface_water} </h6>
          <h6>Poblacion: {dato.population} </h6>
        </div>
      </div>

      <div className='tajetasdetalle'>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text className='Card_Text'>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text className='Card_Text'>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text className='Card_Text'>N/A</Card.Text>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Text className='Card_Text'>N/A</Card.Text>
          </Card>
        </div>
      </div>

      <FooterApp />
    </div>
  )
}
