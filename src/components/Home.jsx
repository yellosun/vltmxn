import React from 'react';
import Nav from './Nav'
import Body from './Body'

export default function Home() {
  return (
    <div style={container}>
        <div style={content}>
            <Nav />
            <Body />
        </div>
    </div>
  );
}

const container = {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
    // fontFamily: `'Roboto', 'Oxygen', 'Helvetica Neue',`,
}

const content = {
    height: '600px',
    width: '1100px',
    display: 'flex',
    align: 'center',
    backgroundColor: 'white'
}