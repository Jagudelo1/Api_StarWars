import React from 'react';
import { CardApp } from './CardApp/CardApp';
import { NavbarApp } from './NavbarApp/NavbarApp';
import { SliderApp } from './SliderApp/SliderApp';
import Vader from './Img/Personajes/Darth_Vader.jpg';
import Luke from './Img/Personajes/Luke_Skywalker.png';
import Obi from './Img/Personajes/Obi_Wan_Kenobi.jpg';
import { TextApp } from './Texto/TextApp';
import { FooterApp } from './FooterApp/FooterApp';
import Button from 'react-bootstrap/Button';
import './CardApp/CardApp.css';
import { Link } from 'react-router-dom';

const HomeApp = () => {
  return (
    <div className='App'>
      <NavbarApp />
      <SliderApp />
      <TextApp />
      <CardApp
        src={Vader}
        title="Darth Vader"
        text="Anakin era uno de los Jedi más 
        poderosos, era audaz y poseía una gran 
        habilidad con el sable láser."
      />
      <CardApp
        src={Luke}
        title="Luke Skywalker"
        text="Hijo del Jedi Anakin Skywalker y la 
        senadora Pádme Amidala de Naboo, Fue el 
        último Jedi de la Antigua Orden y el 
        primero de la Nueva Orden Jedi."
      />
      <CardApp
        src={Obi}
        title="Obi Wan Kenobi"
        text="Fue un Maestro Jedi conocido también 
        como Ben Kenobi, Obi-Wan Kenobi tuvo un 
        papel muy importante en el destino de la 
        Galaxia."
      />
      <Button className='button_mas' variant="light">
        <Link className='linkto' to='/Personajes'>Ver más</Link>
      </Button>
      <FooterApp />
    </div>
  )
}

export default HomeApp