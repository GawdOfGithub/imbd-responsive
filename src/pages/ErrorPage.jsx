import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useEffect } from 'react';

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
      <div className='flex flex-col items-center justify-center mt-40'>
     <div className='text-8xl'>
      
      <span className='text-red-500 tex-8xl'>4</span>
      <span className='text-black'>0</span>
      <span className='text-blue-900'>4</span>
     </div>
     <div className='text-3xl mt-10 font-extrabold text-red-300'><span className='text-yellow-500 text-8xl '>P</span>age not found</div>
     <Link to="/" style={{zIndex:"100"}} className='text-3xl text-cyan-700 mt-10 border border-black' >Back to home</Link>
    
     </div>
    <Particles
      id="tsparticles"
     
      init={particlesInit}
      loaded={particlesLoaded}
    />
    
    </>
    
  );
};

export default ErrorPage;
