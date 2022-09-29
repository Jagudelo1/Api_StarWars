import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Img/Img1.jpg';
import Img2 from '../Img/Img2.jpg';
import Img3 from '../Img/Img3.jpg';

export const SliderApp = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>La Grandiosa Estrella de la Muerte</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Unete a la Resistencia</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Pasate al Lado Oscuro</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
