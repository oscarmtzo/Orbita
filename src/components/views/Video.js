import React from 'react';

import NavBar from './../NavBar';

import './../styles/Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShareIcon from '@mui/icons-material/Share';

import Imagen from './../../assets/imgs/perfil_BG.png'

import Footer from '../Footer';


const SecundaryNavBar = () => {
    return (
        <div id="SecundaryNavBar">
            <a href="/Orbita" className='boton_nav'> <ArrowBackIcon/> INICIO</a>
            <h2>Titulo del curso aquí</h2>
            <aside>
                <img alt="imagen_perfil" src={Imagen}/>
                <button herf="/Orbita" className='boton_nav'>ESTADISTICAS <BarChartIcon /> </button>
                <button herf="/Orbita" className='boton_nav'>COMPARTIR <ShareIcon /> </button>
            </aside>
        </div>
    )
}

const ContenidoCurso = () => {
    const cursos = JSON.parse({
  "cursos": [
    {
      "titulo": "Curso de Programación Básica",
      "descripcion": "Aprende a programar desde cero",
      "modulos": [
        {
          "titulo": "Introducción a la programación",
          "descripcion": "Aprende los conceptos básicos de programación",
          "videos": [
            {
              "titulo": "Variables y tipos de datos",
              "descripcion": "En este video se explica cómo declarar variables y tipos de datos en un programa",
              "url": "https://www.youtube.com/watch?v=abcd1234",
              "comentarios": [
                {
                  "usuario": "juanito",
                  "comentario": "Este video fue muy útil, gracias por compartirlo"
                },
                {
                  "usuario": "maria",
                  "comentario": "Me gustó mucho la explicación, muy clara y sencilla"
                }
              ]
            },
            {
              "titulo": "Estructuras de control de flujo",
              "descripcion": "En este video se explican las estructuras de control de flujo en programación",
              "url": "https://www.youtube.com/watch?v=efgh5678",
              "comentarios": [
                {
                  "usuario": "pepe",
                  "comentario": "Excelente video, me ayudó a entender mejor las estructuras de control"
                },
                {
                  "usuario": "luisa",
                  "comentario": "Muy buen video, gracias por compartirlo"
                }
              ]
            }
          ]
        },
        {
          "titulo": "Programación orientada a objetos",
          "descripcion": "Aprende a programar con el paradigma de programación orientada a objetos",
          "videos": [
            {
              "titulo": "Clases y objetos",
              "descripcion": "En este video se explica cómo crear clases y objetos en programación orientada a objetos",
              "url": "https://www.youtube.com/watch?v=ijkl9012",
              "comentarios": [
                {
                  "usuario": "ana",
                  "comentario": "Muy buen video, me ayudó a entender mejor las clases y objetos"
                },
                {
                  "usuario": "carlos",
                  "comentario": "Excelente explicación, gracias por compartirlo"
                }
              ]
            },
            {
              "titulo": "Herencia y polimorfismo",
              "descripcion": "En este video se explican los conceptos de herencia y polimorfismo en programación orientada a objetos",
              "url": "https://www.youtube.com/watch?v=mnop3456",
              "comentarios": [
                {
                  "usuario": "pedro",
                  "comentario": "Muy útil el video, gracias por compartirlo"
                },
                {
                  "usuario": "laura",
                  "comentario": "Me gustó mucho la explicación, muy clara y sencilla"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
    return(
        <>
            
            <h3>Plan de estudio</h3>

        </>
    )  
}

const Video = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='nav_espacio'></div>
            <SecundaryNavBar />
            <section className='ContenidoCurso'>
                <ContenidoCurso />
            </section>
            <h1>Video</h1>
            <Footer />
        </>
    )
}  

export default Video;