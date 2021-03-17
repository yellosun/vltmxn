import React from 'react';
import Nav from './Nav'
import Body from './Body'

export default function Home() {
  return (
    <div style={container}>
        <Nav />
        <Body />
    </div>
  );
}

const container = {
    height: '100vh',
    backgroundColor: 'red'
    // fontFamily: `'Roboto', 'Oxygen', 'Helvetica Neue',`,
}