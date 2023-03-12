import React from 'react'
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
import NavBar from '../NavBar';
import Footer from './../Footer';

const Login = () => {
    return (
        <>
            <NavBar></NavBar>            
            <h1>Iniciar sesión</h1>
            <br/>
            {/* <Button variant="contained">

                <Link to="/cursos">Cursos</Link>
            </Button>
            <br/>
            <Link to="/">Inicio</Link> */}
            <Footer />
        </>
    )
}

export default Login;