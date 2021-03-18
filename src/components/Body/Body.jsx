import React from 'react';
import About from './About'

export default function Body() {
  return (
    <div style={container}>
    	<About />
    </div>
  );
}

const container = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}