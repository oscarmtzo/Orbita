import React from 'react';
// import { Link } from 'react-router-dom'

// icons from Mui
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link'

//images
import orbita_footer_image from './../assets/imgs/orbita_footer_image.png'

// styles
import './styles/Footer.css'

const Footer = () => {
 return (
    <footer>
      <section className='footer_section1'>
         <article>
            <Link underline='hover' href="/cursos">Enseña en Orbita</Link>
            <Link underline='hover' href="/#empleos">Bolsa de Trabajo</Link>
            <Link underline='hover' href="/">Contrata a un profesional</Link>
         </article>
         <article>
            <Link underline='hover' href="">Sobre Nosotros</Link>
            <Link underline='hover' href="">Contacto</Link>
            <Link underline='hover' href="">Mapa del Sitio</Link>
         </article>
         <article>
            <Link underline='hover' href="">Politica de Privacidad</Link>
            <Link underline='hover' href="">Términos de uso</Link>
            <Link underline='hover' href="">Configuración de Cookies</Link>
         </article>
         <article>
            <Link underline='hover' href="">Siguenos</Link>
            <aside>
               <Link underline='hover' href="">
                  <FacebookIcon/>
               </Link>
               <Link underline='hover' href="">
                  <LinkedInIcon/>
               </Link>
               <Link underline='hover' href="">
                  <TwitterIcon/>
               </Link>
               <Link underline='hover' href="">
                  <InstagramIcon/>
               </Link>
            </aside>
         </article>
      </section>
      <section className='footer_section2'>
         <article>
            <img src={orbita_footer_image} width="130px" alt="Orbita logo"/>
         </article>
         <article>
            Orbita 2023.org
         </article>
      </section>

    </footer>
 )
}

export default Footer;