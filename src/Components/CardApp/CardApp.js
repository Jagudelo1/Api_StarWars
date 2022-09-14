import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardApp.css';

export const CardApp = ({ src, title, text }) => {
    return (
        <>
            <div className='flip-container'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img src={src} className='front' />
                    <div className='back'>
                        <Card.Title className='title_card'>
                            {title}
                        </Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </div>
                </Card>
            </div>
        </>
    )
}