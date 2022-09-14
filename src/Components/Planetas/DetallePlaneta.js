import React, { useEffect, useState } from 'react';
import { NavbarApp } from '../NavbarApp/NavbarApp';
import { FooterApp } from '../FooterApp/FooterApp';
import { useParams } from 'react-router-dom';
import { unicoPlaneta } from '../Hooks/FuncionesPlanets';
import { FaReply } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Endow from '../Img/Planetas/Endow.jpg'
import '../Hooks/Detalles.css';

export const DetallePlaneta = () => {
    const [dato, setDato] = useState([]);

    const idParams = useParams();
    const planeta = unicoPlaneta(idParams.name);

    useEffect(() => { planeta.then(res => setDato(res)) }, []);

    return (
        <div>
            <NavbarApp />

            <button className='boton_atras'>
                <a href='../Planetas'>
                    <FaReply size={30} />
                </a>
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

            <FooterApp />
        </div>
    )
}
