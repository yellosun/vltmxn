import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav'
import Body from './Body'

export const Context = React.createContext({})

export default function Home() {
    return (
        <Context.Provider value={null}>
            <div style={container}>
                <div style={content}>
                    <BrowserRouter>
                        <Nav />
                        <Body />
                    </BrowserRouter>
                </div>
            </div>
        </Context.Provider>
    );
}

// Color Theme
// #d2c1d9
// #87b3ce
// #cadde2
// #a6abe7
// #baa3d8
// #96b7d6


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
    backgroundColor: 'white',
    transition: 'all ease .5s',
}