import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UsePersonajes } from '../Hooks/ContadorPeople'
import { todosPersonajes } from '../Hooks/FuncionesPerson'
import '../Hooks/Hooks.css'
import Yoda from '../Img/Personajes/Yoda.jpg'

export const AllPersonajes = () => {
  //Personajes//
  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])

  const { getAllPersonaje, personajes, setPersonajes, Contador, dismin, aumen } = UsePersonajes()
  useState(null)
  useEffect(() => {
    getAllPersonaje(Contador)
  }, [personajes, Contador, getAllPersonaje])

  return (
    <div className='ContainerPrincipal' style={{ paddingBottom: '50px' }}>
      <h1 className='title_person'>Personajes</h1>
      <div className='Container_Card'>
        {personajes !== null
          ? personajes.map((personajes) => (
              <div key={setPersonajes}>
                <Card
                  page='/Personajes/'
                  style={{ width: '18rem', height: '27.5rem' }}
                  className='Container_Hijo'
                >
                  <Card.Img variant='top' src={Yoda} />
                  <Card.Body>
                    <Card.Title className='title_person '>{personajes.name}</Card.Title>
                    <Card.Text>
                      <div className='scroll'>
                        <p>
                          <h6>Nombre: {personajes.name} </h6>
                        </p>
                        <p>
                          <h6>Altura: {personajes.height}</h6>
                        </p>
                        <p>
                          <h6>Masa: {personajes.mass}</h6>
                        </p>
                        <p>
                          <h6>Color de Pelo: {personajes.hair_color}</h6>
                        </p>
                        <p>
                          <h6>Color de Piel: {personajes.skin_color}</h6>
                        </p>
                        <p>
                          <h6>Color de Ojos: {personajes.eye_color}</h6>
                        </p>
                        <p>
                          <h6>Cumpleaños: {personajes.birth_year}</h6>
                        </p>
                        <p>
                          <h6>Genero: {personajes.gender}</h6>
                        </p>
                      </div>
                      <Button
                        key={personajes.name}
                        variant='outline-light'
                        className='boton_detalle'
                      >
                        <Link to={`/Personaje/${personajes.url.split('/')[5]}`}>Detalles</Link>
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          : 'Cargando...'}
      </div>
      <div className='ContainerPage'>
        <button onClick={dismin}>
          <FaAngleLeft size={20} />
          Devolver
        </button>
        <b>{Contador}</b>
        <button onClick={aumen}>
          Siguiente
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  )
}
