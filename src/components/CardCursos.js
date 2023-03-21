import React from 'react'
import Paper from '@mui/material/Paper'
import { Card } from '@mui/material'

const dataUnVideo = {
    titulo: "Mécanica Aeroespacial",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac.",
    imgDireccion: "https://i.ytimg.com/vi/VFMMbXmaPHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1Pl8jzB9z_T7t5nWC9WC7ZWmIXw",
    videoDireccion: "https://www.youtube.com/watch?v=VFMMbXmaPHk",
    vistas: "6.3k visitas",
    tiempo: "hace 1 hora"
}

const dataVideos = [
    dataUnVideo, dataUnVideo, dataUnVideo, dataUnVideo
]

const mostrarCards = (data) => {
    return data.map( (card, index)=>{
        return (
            <Paper key={index}>
                <h3>{card.titulo}</h3>
                
                <video
                    controls
                    autoPlay
                    loop
                    muted
                    src={card.videoDireccion}
                    // poster={card.imgDireccion}
                >
                    
                </video>
            </Paper>
        )
    })
}

const CardCursos = () => {
    return (
        <>
            <hr/>
            {mostrarCards(dataVideos)}
        </>
    )
}

export default CardCursos;