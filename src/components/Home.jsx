import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav'
import Body from './Body'

export const Context = React.createContext({})
export const routes = {
    ABOUT: 'About',
    PROJECTS:'Projects',
    WORK:'Work',
    CONTACT:'Contact',
    RESOURCES: 'Resources'
}

export default function Home() {
    const [selectedRoute, changeRoute] = useState(routes.ABOUT)

    return (
        <Context.Provider value={{selectedRoute, changeRoute}}>
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

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

    // backgroundColor: 'red',  
    fontFamily: 'Lora',
    fontWeight: 700,
    fontSize: 13
}

const content = {
    height: '600px',
    width: '1100px',
    display: 'flex',
    align: 'center',
    backgroundColor: 'white',
}