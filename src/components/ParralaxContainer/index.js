import React from 'react';
import "./style.css";
import 'materialize-css';
import { Parralax } from 'react-materialize';

function ParralaxContainer() {
  return (
    <Parralax 
    image={<video className="bg-video" src="../public/assets/video/Space_loop.mp4" muted loop autoPlay></video>}
    options={{
      responsiveThreshold: 0
    }}
    />
  );
}

export default ParralaxContainer;