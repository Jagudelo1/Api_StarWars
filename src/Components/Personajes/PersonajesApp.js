import React from 'react'
import { FooterApp } from '../FooterApp/FooterApp'
import { NavbarApp } from '../NavbarApp/NavbarApp'
import { AllPersonajes } from './Personajes'

export const PersonajesApp = () => {
  return (
    <div>
        <NavbarApp/>
        <AllPersonajes/>
        <FooterApp/>
    </div>
  )
}
