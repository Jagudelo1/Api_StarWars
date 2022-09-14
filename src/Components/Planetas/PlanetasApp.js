import React from 'react'
import { FooterApp } from '../FooterApp/FooterApp'
import { NavbarApp } from '../NavbarApp/NavbarApp'
import { AllPlanetas } from './Planetas'

export const PlanetasApp = () => {
    return (
        <div>
            <NavbarApp />
            <AllPlanetas />
            <FooterApp />
        </div>
    )
}
