import React from 'react';
/* import { Modal, Button } from 'react-bootstrap'; */
//import { Link } from 'react-router-dom';
import { Card } from "react-bootstrap"
import { Box } from '@material-ui/core';

const Product = ({ nombre, idProducto, descripcion, foto, precio, talle, color, reviews, handleSubmit }) => (
    <div >
        {/* 
            <Box component="div" textOverflow="clip">
                {nombre}
            </Box>
            <Box component="div" textOverflow="ellipsis">
                <b>Descripcion:</b> {descripcion}<br />
                <b>Precio:</b> {precio}<br />
                <b>Reviews:</b> {reviews}<br />
                <button onClick={handleSubmit}>Agregar a Carrito</button>
            </Box> */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={foto} />
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <b>Descripcion:</b> {descripcion}<br />
                    <b>Precio:</b> {precio}<br />
                    <b>Reviews:</b>

                    {reviews && reviews.map(review => (
                        <ul>
                            <li>{review.review}</li>
                            <li>{review.calificacion}</li>
                        </ul>
                    ))}
                </Card.Text>
                <button onClick={handleSubmit}>Agregar a Carrito</button>
            </Card.Body>
        </Card>
    </div>
);



export default Product;