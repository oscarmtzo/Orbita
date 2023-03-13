import React from 'react';
import Card from '@mui/material/Card';
import { CardActions, CardContent, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';

import undraw_Aircraft from './../assets/imgs/undraw_Aircraft.png'



const dataUnProyecto = {
    titulo: "Proyecto aeroespacial satélite 1",
    img: `${undraw_Aircraft}`,
    link: "https://www.gob.mx/aem"
}

const dataProyectos = [
    dataUnProyecto, dataUnProyecto, dataUnProyecto, dataUnProyecto
]

const mostrarCards = (data, themeStyle) => {
    return data.map( (cardInfo, index) => {
        return (

        <Card key={index} sx={{ maxWidth: 190}}>
                <CardMedia 
                    component="img"
                    image={cardInfo.img}
                    height="50"
                    alt="Proyectos Aeronauticos"
                />
                <CardContent>

                    <h4>{cardInfo.titulo}</h4>
                    <p>Entérate de este proyecto antes que nadie y siéntete orgulloso de los ingenieros mexicanos.</p>
                </CardContent>
                <CardActions>

                    <Button theme={themeStyle} variant='contained'size="small" href={cardInfo.link} target="_blank" style={{position: 'inherit'}}>Leer Mas</Button>
                </CardActions>
            </Card>
        )
    } )
}

const CardProyectos = (props) => {
    const theme = props.theme
    return (
        <>
            {mostrarCards(dataProyectos, theme)}
            {/* <Card sx={{ maxWidth: 190}}>
                <CardMedia 
                    component="img"
                    image={dataUnProyecto.img}
                    height="50"
                    alt="Proyectos Aeronauticos"
                />
                <CardContent>

                    <h4>{dataUnProyecto.titulo}</h4>
                    <p>Entérate de este proyecto antes que nadie y siéntete orgulloso de los ingenieros mexicanos.</p>
                </CardContent>
                <CardActions>

                    <Button theme={props.theme} variant='contained'size="small" href={dataUnProyecto.link} target="_blank">Leer Mas</Button>
                </CardActions>
            </Card> */}
        </>
    )
}

export default CardProyectos