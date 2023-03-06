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
            <Link to="/">
                <div className="logo_container">
                    <div id="logo"></div>
                </div>
            </Link>
            <Link to="/cursos">
                <Button theme={theme} >
                    Escuela
                </Button>
            </Link>
            <Link to="/cursos">
                <Button theme={theme}>
                    Descubrir
                </Button>
            </Link>
            <Link to="/cursos">
                <Button theme={theme} >
                    Vacantes
                </Button>
            </Link>
            <Link to="/cursos">
                <Button theme={theme} >
                    Contratar
                </Button>
            </Link>
            <div className='navbar_login'>
                <Link to="/login">
                    <Button theme={theme} variant='contained'>
                        Entrar
                    </Button>
                </Link>
                <Link to="/login">
                    <Button theme={theme} variant='contained'>
                        Registrarse
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;