import React, { useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper'
import { Card } from '@mui/material'

function VideoLoop() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Crea un nuevo reproductor de YouTube
    const player = new window.YT.Player(playerRef.current, {
      videoId: 'VFMMbXmaPHk',
      playerVars: {
        autoplay: 1,
        loop: 1,
        mute: 1,
        controls: 0,
        modestbranding: 1,
      },
      events: {
        onReady: (event) => {
          // Inicia la reproducción del video en loop
          event.target.playVideo();
          event.target.setLoop(true);
        },
      },
    });

    return () => {
      // Destruye el reproductor cuando el componente se desmonta
      player.destroy();
    };
  }, []);

  return <div ref={playerRef}></div>;
}

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