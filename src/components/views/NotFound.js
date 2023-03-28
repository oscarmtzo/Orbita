import React from 'react'
import { useParams } from 'react-router-dom';

import { Container } from '@mui/system';

import NavBar from './../NavBar';
import Footer from './../Footer';

import notFound from './../../assets/imgs/notFound.png'

const NotFound = () => {
    const params = useParams();
    return (
        <>
            <NavBar />
                <Container>
                    <br/>
                    <br/>
                    <br/>
                    <Container>
                        <h1>No encontramos ese tema en particular,</h1>
                        <h2> prueba usando la barra de navegación</h2>
                    </Container>
                    <br/>
                    <img src={notFound} style={ { height: "50vh" } } alt="notFound"/>
                </Container>
                
            <Footer />
        </>
    )
}

export default NotFound;