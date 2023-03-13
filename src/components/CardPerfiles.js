import React from 'react';

// importaciones Componentes MUI
import Card from '@mui/material/Card';
import { Button, CardActions, CardMedia, CardContent, Avatar } from '@mui/material'

// imagenes dummy
import undraw_To_the_moon from './../assets/imgs/undraw_To_the_moon.png';
import perfil_BG from './../assets/imgs/perfil_BG.png';

//objeto de un solo perfil
const dataUnPerfil = {
    imgPortada: `${undraw_To_the_moon}`,
    nombre: "Proyecto aeroespacial satélite 1",
    ubicacion: "Puebla, Puebla",
    imgPerfil: `${perfil_BG}`,
    link: "https://www.gob.mx/aem"
}

//arreglo de datos de multiples perfiles
const dataPerfiles = [
    dataUnPerfil, dataUnPerfil, dataUnPerfil, dataUnPerfil
]

const mostrarCards = (data, themeStyle) => {
    return data.map( (cardInfo, index) => {
        return (

        <Card key={index} sx={{ maxWidth: 190}}>
                <CardMedia 
                    component="img"
                    image={cardInfo.imgPortada}
                    height="50"
                    alt="Proyectos Aeronauticos"
                />
                <CardContent>
                    <Avatar alt={cardInfo.nombre} src={cardInfo.imgPerfil} />
                    <h4>{cardInfo.nombre}</h4>
                    <p>{cardInfo.ubicacion}</p>
                </CardContent>
                <CardActions>

                    <Button theme={themeStyle} variant='contained'size="small" href={cardInfo.link} target="_blank" style={{position: 'inherit'}}>Leer Mas</Button>
                </CardActions>
            </Card>
        )
    } )
}
const CardPerfiles = (props) => {
    const theme = props.theme
    return (
        <>
            {mostrarCards(dataPerfiles, theme)}
        </>
    )
}

export default CardPerfiles;