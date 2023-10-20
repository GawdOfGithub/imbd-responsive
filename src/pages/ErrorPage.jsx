import React from "react"; 
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
const ErrorPage = () => { 
  const particlesInit = async (main) => { 
    console.log(main); 
   
    await loadFull(main); 
  }; 
  const particlesLoaded = (container) => { 
    console.log(container); 
  }; 
  return ( 
    <div className="App"> 
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{ 
        
            fpsLimit: 120,
            particles: {
              number: {
                value: 3,
                density: {
                  enable: true,
                  area: 100,
                },
              },
              color: {
                value: "#008781",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 1,
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0,
                  sync: false,
                },
              },
              size: {
                value: 50,
                random: {
                  enable: true,
                  minimumValue: 15,
                },
              },
              move: {
                enable: true,
                speed: 17,
                direction: "down",
                random: false,
                straight: true,
                outModes: {
                  default: "out",
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: false,
              },
            },
            detectRetina: true,
          
        }} 
      /> 
    </div> 
  ); 
}  
export default ErrorPage; 