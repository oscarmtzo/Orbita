import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';

import NavBar from '../NavBar';
import Footer from './../Footer';
import undraw_login from './../../assets/imgs/undraw_Login.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import "./../styles/Login.css";



const fontStyle = {
    color: "#5D5A88"
}


const Login = () => {
    const [h1, setH1] = useState("Iniciar sesión")
    const [loginText, setLoginText] = useState("Inicia sesión")
    const [displayNone, setDisplayNone] =useState(fontStyle)
    const [displayRegistrar, setDisplayRegistrar] = useState({color: "#9795B5"})

    const handleClick = () => {
        setH1( prevH1 => prevH1 = "Registrate")
        setLoginText( prevLoginText => prevLoginText = "Registrarse")
        setDisplayNone( prevDisplay => prevDisplay = {display: "none"})
        setDisplayRegistrar( prevDisplayRegistrar => prevDisplayRegistrar={display: "none"} )
    }

    return (
        <>  
            <NavBar></NavBar>     
            <br/>
            <br/>
            <br/>      
            <main id="main_login">
                <section>
                    <div>
                        <h1>{h1}</h1>
                        <h4 style={ displayRegistrar }>¿No tienes una cuenta? <button id="signUp_button" style={fontStyle} onClick={handleClick}>Regístrate</button> </h4>
                    </div>
                    <form>
                        <label style={fontStyle} htmlFor="email">Correo electrónico:</label>
                        <input style={fontStyle} className="input_style" type="email" id="email" name="email" required />

                        <label style={fontStyle} htmlFor="password">Contraseña:</label>
                        <input style={fontStyle} className='input_style' type="password" id="password" name="password" required />

                        <button className="purpleButton" type="submit"> {loginText} </button>
                        <a style={displayNone} href=''>¿Olvidaste tu contraseña?</a>
                    </form>
                    <p>
                        <button style={fontStyle} className='login_button'><FacebookIcon /> {loginText} con Facebook</button>
                        <button style={fontStyle} className='login_button'><GoogleIcon /> {loginText} con Google</button>
                    </p>
                </section>
                <aside>
                    <img
                        src={undraw_login}
                        alt={"undraw_login"}
                        style={ {height: "300px"  } }
                    />
                </aside>
            </main> 
            <br/>
            <Footer />
        </>
    )
}

export default Login;