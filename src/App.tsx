import React from "react"; 
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 
const App = () => { 
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
         //Copy_paste the javascript file code of 404 pages or any other particle JS Code here
        }} 
      /> 
    </div> 
  ); 
}  
export default App; 