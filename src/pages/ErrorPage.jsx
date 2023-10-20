import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


import { Link } from 'react-router-dom';
const ErrorPage = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // Define your particle configuration
    const particlesConfig = {
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
          value: '#008781',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 1,
          random: {
            enable: true,
            minimumValue: 0.1,
          },
          animation: {
            enable: true,
            speed: 2,
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
          direction: 'down',
          random: false,
          straight: true,
          outModes: {
            default: 'out',
          },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          resize: false,
        },
      },
      detectRetina: true,
    };

    // Load the particle animation into the "tsparticles" container
    engine.load('tsparticles', particlesConfig);

    // Load additional settings if needed (e.g., loadSlim)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  
  return (
    <>
     
    <Particles
      id="tsparticles"
     
      init={particlesInit}
      loaded={particlesLoaded}
    />
    
    </>
    
  );
};

export default ErrorPage;
