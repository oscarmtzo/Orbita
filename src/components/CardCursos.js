import React from 'react';

import { Card, CardActionArea, CardContent } from '@mui/material'

import ReactPlayer from 'react-player';


import './styles/reproductor.css'

const dataUnVideo = {
    titulo: "Mécanica Aeroespacial",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac.",
    imgDireccion: "https://i.ytimg.com/vi/VFMMbXmaPHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1Pl8jzB9z_T7t5nWC9WC7ZWmIXw",
    videoDireccion: "https://www.youtube.com/watch?v=VFMMbXmaPHk",
    vistas: "6.3k visitas",
    tiempo: "hace 1 hora"
}
const dataUnVideo2 = {
    titulo: "Eléctronica Aeroespacial",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac.",
    imgDireccion: "https://i.ytimg.com/vi/VFMMbXmaPHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1Pl8jzB9z_T7t5nWC9WC7ZWmIXw",
    videoDireccion: "https://www.youtube.com/watch?v=d8ctBgMRf6w",
    vistas: "6.3k visitas",
    tiempo: "hace 1 hora"
}

const dataVideos = [
    dataUnVideo, dataUnVideo2, dataUnVideo, dataUnVideo2
]

const mostrarCards = (data) => {
  return data.map( (card, index)=>{
    return (
	<>
		<hr/>
		<Card key={index} sx={{ minWidth: 300, maxWidth: 800, flexGrow: 1}}>
			<CardActionArea positionStatic href="" target="_blank">
				<ReactPlayer
					className="reactPlayer"
					url={card.videoDireccion}
					muted={true}
				/>
				<CardContent style={{ color: '#5D5A88'}}>
					<h3 style={ {fontSize: "2em"} }>{card.titulo}</h3>
					<p style={ {fontWeight: "300"} }>{card.descripcion}</p>
				</CardContent>
			</CardActionArea>
		</Card>
		<br/>
	</>
    )
  })
}

const CardCursos = () => {
  return (
    <>
     	{mostrarCards(dataVideos)}
    </>
  )
}

export default CardCursos;