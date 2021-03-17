import React from 'react';
const Bio = require('../../../assets/bio.jpg')

export default function About() {
  return (
    <div style={container}>
    	<img src={Bio} style={image}/>
    </div>
  );
}

const container = {
    margin: 0,
}

const image = {
	height: '100%',
	width: '500px'
}