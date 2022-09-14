import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Yoda from '../Img/Personajes/Yoda.jpg';
import '../Hooks/Hooks.css';
import { todosPlanetas } from '../Hooks/FuncionesPlanets';
import { UsePlanetas } from '../Hooks/ContadorPlanets';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const AllPlanetas = () => {

    const { getAllPlanetas, planetas, setPlanetas, Contador, dismin, aumen } =
        UsePlanetas();
    useEffect(() => {
        getAllPlanetas(Contador);
    }, [planetas]);

    //Planetas//
    useEffect(() => {
        todosPlanetas(setPlanetas);
    }, []);


    return (
        <>
            <h1 className='title_person'>Planetas</h1>
            <div className='Container_Card'>{
                planetas !== null ?
                    (planetas.map(planetas => (
                        <div key={setPlanetas}>
                            <Card page="/Planetas/" style={{ width: '18rem', height: '27.5rem' }} className='Container_Hijo'>
                                <Card.Img variant="top" src={Yoda} />
                                <Card.Body>
                                    <Card.Title className='title_person '>{planetas.name}</Card.Title>
                                    <Card.Text>
                                        <div className='scroll'>
                                            <p><h6>Nombre: {planetas.name} </h6></p>
                                            <p><h6>Perdio de Rotacion: {planetas.rotation_period}</h6></p>
                                            <p><h6>Periodo orbital: {planetas.orbital_period}</h6></p>
                                            <p><h6>Diametro: {planetas.diameter}</h6></p>
                                            <p><h6>Clima: {planetas.climate}</h6></p>
                                            <p><h6>Gravedad: {planetas.gravity}</h6></p>
                                            <p><h6>Terreno: {planetas.terrain}</h6></p>
                                            <p><h6>Superficie del agua: {planetas.surface_water}</h6></p>
                                            <p><h6>Poblacion: {planetas.population}</h6></p>
                                        </div>
                                        <Button key={planetas.name} variant="outline-light" className='boton_detalle'>
                                            <a href={`/Planeta/${planetas.url.split("/")[5]}`}>Detalles</a>
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                    ) : ('Cargando...')}

                <div className='ContainerPage'>
                    <button onClick={dismin}>
                        <FaAngleLeft size={20} />Devolver
                    </button>
                    <b>{Contador}</b>
                    <button onClick={aumen}>Siguiente
                        <FaAngleRight size={20} />
                    </button>
                </div>
            </div>
        </>
    )
}