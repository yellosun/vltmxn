import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav'
import Body from './Body'

export default function Home() {
    return (
        <div style={container}>
            <div style={content}>
                <BrowserRouter>
                    <Nav />
                    <Body />
                </BrowserRouter>
            </div>
        </div>
    );
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

    fontFamily: 'Lora',
    fontWeight: 700,
    fontSize: 13
}

const content = {
    height: 800,
    width: 1100,
    display: 'flex',
    align: 'center',
    transition: 'all ease .5s',
}