import React from 'react'
// import { Link } from "react-router-dom";
import NavBar from './../NavBar'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import './../styles/Inicio.css'

/**
 * @function permite crear temas personailzados
 */
import { createTheme } from '@mui/material/styles'

const theme = createTheme(
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
            <header>
                <section>
                    <article>
                        <h1>*Orbita* es la comunidad aeroespacial no. 1</h1>
                        <p>Aprende, encuentra trabajo o recluta a los mejores miembros de la comunidad aeroespacial. </p>
                    </article>
                    <article>
                        <Link to="/cursos">
                            <Button theme={theme} variant="contained">VER LOS CURSOS</Button>
                        </Link>
                        <Link to="/login">
                            <Button theme={theme} variant="contained">CREA TU CUENTA GRATIS</Button>
                        </Link>
                    </article>
                </section>
                <aside>
                    <div className='img_inicio'></div>
                </aside>
            </header>
            <main>
            </main>
            <h1>Pagina de Inicio</h1>
        </>
        )
}

export default Inicio