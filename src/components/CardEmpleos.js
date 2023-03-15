import React from 'react';
import { Card, CardActionArea, CardContent, Avatar } from '@mui/material';
import perfil_BG from './../assets/imgs/perfil_BG.png';


const dataUnEmpleo = {
    img: `${perfil_BG}`,
    nombre: "Bombardier",
    ubicacion: "Queretaro, Queretaro",
    descripcion: "Busca a un ingeniero mexicano muy profesional y capacitado de la industria aeroespacial mexicana."
}

const dataEmpleos = [
    dataUnEmpleo,
    dataUnEmpleo,
    dataUnEmpleo
]

const mostrarCards = (data, themeStyle) => {
    return data.map( (card, index) =>{
        return (
            <Card key={index} sx={{ maxWidth: 250 }} >
                <CardActionArea  style={ {position: 'static'} } href="https://www.linkedin.com/company/bombardier/jobs/" target="_blank">
                    <Avatar alt={card.nombre} src={card.img} style={ {position: 'static'} }/>
                    <CardContent style={{ color: '#5D5A88' }}>
                        <h4>{card.nombre}</h4>
                        <h6>{card.ubicacion}</h6>
                        <p>{card.descripcion}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    })
}


const CardEmpleos = (props) => {
    const theme = props.theme;
    return (
        <>
            {mostrarCards(dataEmpleos, theme)}
        </>
    )
}

export default CardEmpleos;