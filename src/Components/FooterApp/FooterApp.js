import React from 'react';
import './FooterApp.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const FooterApp = () => {
    return (
        <div className='ContainerFooter'>
            <div className='ContainerFooter2'>
                <div className='N1'>
                    <p>Hola, bienvenido al sitio web StarWars,
                        aqui podras encontrar todo los referente
                        a los personajes y planetas que tiene esta
                        gran franquicia.
                    </p>
                </div>
                <div className='N2'>
                    <h2><Link to='/'>StarWars</Link></h2><hr />
                    <FaFacebook size={35} style={{ color: "blue" }} className='Icons_Star' />
                    <FaInstagram size={35} style={{ color: "purple" }} className='Icons_Star' />
                    <FaTwitter size={35} style={{ color: "aqua" }} className='Icons_Star' />
                    <FaGithubSquare size={35} style={{ color: "white" }} className='Icons_Star' />
                </div>
                <div className='N3'>
                    <h2>StarWars</h2>
                    <h5>Contacto</h5>
                    <h5>Blog</h5>
                </div>
            </div>
        </div>
    )
}
