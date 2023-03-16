import React from 'react';
import { Link } from 'react-router-dom'

/**
 * @styles Navbar 
 */
import './styles/NavBar.css'
import Button from '@mui/material/Button'

/**
 * @function permite crear temas personailzados
 */
import { createTheme } from '@mui/material/styles'

// imagenes
import Logo_Laboratorio_Virtual from './../assets/imgs/Logo_Laboratorio_Virtual.png'

// url especial para que funione con github pages
import { url } from './../App';

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



const NavBar = () => {
    return (
        <nav>
            <Link to={ url + "/"}>
                <div className="logo_container">
                    <img id="logo" src={Logo_Laboratorio_Virtual} alt="logo_orbita" />
                    {/* <div id="logo"></div> */}
                </div>
            </Link>
            <Link to={ url + "/cursos"}>
                <Button theme={theme} >
                    Escuela
                </Button>
            </Link>
            <Link to={ url + "/cursos"}>
                <Button theme={theme}>
                    Descubrir
                </Button>
            </Link>
            <Link to={ url + "/#empleos"}>
                <Button theme={theme} >
                    Vacantes
                </Button>
            </Link>
            <Link to={ url + "/#perfiles"}>
                <Button theme={theme} >
                    Contratar
                </Button>
            </Link>
            <div className='navbar_login'>
                <Link to={ url + "/login"}>
                    <Button theme={theme} variant='contained'>
                        Entrar
                    </Button>
                </Link>
                <Link to={ url + "/login"}>
                    <Button theme={theme} variant='contained'>
                        Registrarse
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;