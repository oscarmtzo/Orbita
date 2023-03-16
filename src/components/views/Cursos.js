import React from 'react'
import NavBar from '../NavBar'
import Footer from './../Footer';

// estilos
import './../styles/Cursos.css'
import {theme} from './Inicio';
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';

//imagenes
import undraw_Teaching from './../../assets/imgs/undraw_Teaching.png'

const Cursos = () => {
    return (
        <>
            <NavBar></NavBar>
            <br/>
            <br/>
            <br/>
            <header>
                <h1>¿Quierés compartir tus conocimientos? Publica un curso.</h1>
                <article>
                    <img src={undraw_Teaching} alt={'undraw_Teaching.png'}/>
                    <aside>
                        <p>Si eres un profesional de la industria aeroespacial, puedes utilizar esta herramienta para compartir tus conocimientos con estudiantes y profesionales del sector. </p>
                        <Button theme={theme} variant='contained' href="">PUBLICAR UN CURSO</Button>
                    </aside>
                </article>
            </header>
            <main>
                <h2>¿Hora de aprender? encuentra todos los cursos de la comunidad</h2>
                <aside>
                    <Button theme={theme} >Filtros <FilterAltOutlinedIcon /> <KeyboardArrowDownOutlinedIcon /> </Button>
                </aside>

            </main>
            <Footer />
        </>
    )
}

export default Cursos
