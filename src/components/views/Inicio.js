import React from 'react'
// import { Link } from "react-router-dom";
import NavBar from './../NavBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Footer from './../Footer';


import CardProyectos from '../CardProyectos';
import CardPerfiles from '../CardPerfiles';
import CardEmpleos from '../CardEmpleos';

import inicio_nave_undraw_maker_launch from './../../assets/imgs/inicio_nave_undraw_maker_launch.png'


// ejemplos de imagenes para cards

import './../styles/Inicio.css'
/**
 * @function permite crear temas personailzados
 */
import { createTheme } from '@mui/material/styles'



export const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#5D5A88'
            },
            secondary: {
                main: '#5D5A88'
            }
        },
        typography: {
            fontFamily: 'DM Sans',
          },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                        font-style: normal;
                        font-display: swap;
                        font-weight: 800;
                    }
                `
            }
        }
    }
)



const Inicio = () => {
    return (
        <>  
            <NavBar></NavBar>
            <header id="header_inicio">
                <section>
                    <article className='articulo_inicio'>
                        <h1>*Orbita* es la comunidad aeroespacial no. 1</h1>
                        <p>Aprende, encuentra trabajo o recluta a los mejores miembros de la comunidad aeroespacial. </p>
                    </article>
                    <article className='botones_principales'>
                        <Link to="/cursos">
                            <Button theme={theme} variant="contained">VER LOS CURSOS</Button>
                        </Link>
                        <Link to="/login">
                            <Button theme={theme} variant="contained">CREA TU CUENTA GRATIS</Button>
                        </Link>
                    </article>
                </section>
                <aside>
                    <img className='img_inicio' src={inicio_nave_undraw_maker_launch} alt='imagen de nave espacial' />
                </aside>
            </header>
            <main>
                <section>
                    <article>
                        <h2>
                            Entérate de los últimos avances en la industria aeroespacial mexicana.
                            Conoce los proyectos mas relevantes del sector público y privado de la industria aeroespacial mexicana.    
                        </h2>
                    </article>
                    <article>
                        <div>

                            <CardProyectos theme={theme}/>
                        </div>
                        <div>

                            <CardProyectos theme={theme}/>
                        </div>
                        
                    </article>
                </section>
                <section id="perfiles">
                    <article>
                        <h2>
                            Contrata a los mejores profesionales de la industria aeroespacial mexicana. 
                            Conoce sus perfiles y encuentra el miembro ideal para tu equipo de trabajo, lleva la industria aeroespacial a un nuevo nivel.    
                        </h2>
                    </article>
                    <article>
                        <div>
                            <CardPerfiles theme={theme} />
                        </div>
                        <div>
                            <CardPerfiles theme={theme} />
                        </div>
                    </article>
                </section>
                <section id="empleos">
                    <article>
                        <h2>
                            Encuentra trabajo en la industria aeroespacial mexicana. 
                            Forma parte del equipo de las mejores empresas e instituciones de la industria aeroespacial mexicana.    
                        </h2>
                    </article>
                    <article >
                        <div id='CardEmpleos'>
                            <CardEmpleos />
                        </div>
                        <div id='CardEmpleos'>
                            <CardEmpleos />
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Inicio