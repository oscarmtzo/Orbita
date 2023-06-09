import React from 'react'
import NavBar from '../NavBar'
import Footer from './../Footer';

// estilos
import './../styles/Cursos.css'
import {theme} from './Inicio';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CardCursos from '../CardCursos';

//imagenes
import undraw_Teaching from './../../assets/imgs/undraw_Teaching.png'

const Cursos = () => {
    return (
        <>
            <NavBar></NavBar>
            <br/>
            <br/>
            <br/>
            <header id="header_cursos">
                <h1>¿Quierés compartir tus conocimientos? Publica un curso.</h1>
                <article>
                    <img src={undraw_Teaching} alt={'undraw_Teaching.png'}/>
                    <aside>
                        <p>Si eres un profesional de la industria aeroespacial, puedes utilizar esta herramienta para compartir tus conocimientos con estudiantes y profesionales del sector. </p>
                        <Button theme={theme} style={ {position: "inherit"} } variant='contained' href="">PUBLICAR UN CURSO</Button>
                    </aside>
                </article>
            </header>
            <main id="main_cursos">
                <h2>¿Hora de aprender? encuentra todos los cursos de la comunidad</h2>
                <Paper elevation={1} sx={ { width: 'fit-content' } }>
                    
                    <Button theme={theme} style={ {position: "inherit"} } >Filtros <FilterAltOutlinedIcon /> <KeyboardArrowDownOutlinedIcon /> </Button>

                </Paper>
                <article>
                    <CardCursos />
                </article>
            </main>
            <br/>
            <Footer />
        </>
    )
}

export default Cursos
