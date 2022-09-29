import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaReply } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { FooterApp } from '../FooterApp/FooterApp';
import '../Hooks/Detalles.css';
import { unicoPersonaje } from '../Hooks/FuncionesPerson';
import Personajes from '../Img/Personaje.jpg';
import { NavbarApp } from '../NavbarApp/NavbarApp';
import Vehicles from './Vehicles';
import Films from './Films';
import Starships from './Starships';
import Species from './Species';

export const DetallePersonaje = () => {
  const [data, setData] = useState([]);

  const idByParams = useParams();
  const personaje = unicoPersonaje(idByParams.name);

  useEffect(() => { personaje.then(res => setData(res)) }, [personaje]);

  return (
    <div>
      <NavbarApp />
      <button className='boton_atras'>
        <Link to='/Personajes'> <FaReply size={30} /></Link>
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

      <div className='tajetasdetalle films'>
        {
          data?.films?.map((item2, index2) => {
            return <Films url={item2} key={index2} />
          })
        }
      </div>

      <div className='tajetasdetalle species'>
        {
          data?.species?.map((item4, index4) => {
            return <Species url={item4} key={index4} />
          })
        }
      </div>

      <div className='tajetasdetalle vehicles'>
        {
          data?.vehicles?.map((item, index) => {
            return <Vehicles url={item} key={index} />
          })
        }
      </div>

      <div className='tajetasdetalle starships'>
        {
          data?.starships?.map((item3, index3) => {
            return <Starships url={item3} key={index3} />
          })
        }
      </div>


      <FooterApp />
    </div>
  )
}
