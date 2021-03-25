import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { routes } from './constants'
const Resource = require('../../assets/resources.pdf')

export function Routes() {
    const { pathname } = useLocation()
    const [selectedRoute, changeRoute] = useState(pathname)

    return Object.values(routes).map((page) => {
        const isSelected = page.route === selectedRoute
        
        return page.route === routes.RESOURCES.route ? (
            <a download style={{...link, marginTop: 20 }} href={Resource}>Resources</a>
        ) : (
            <div key={page.route} style={routeContainer} onClick={() => changeRoute(page.route)}>
                <Link to={page.route} style={{...link, fontWeight: isSelected && 300}}>
                    {page.label}
                </Link>
            </div>  
        )
    })
}

export default function Nav() {
    return (
        <div style={container}>
            {/*<div style={logo}>
                VM
            </div>*/}
            <div style={routesContainer}>
                <Routes/>
            </div>
            
        </div>
    );
}


const defaultFlex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
}

const container = {
    ...defaultFlex,
    height: '100%',
    width: '300px',
}

const logo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    border: '2px solid black',
    height: 40,
    width: 40,
    fontWeight: 700,
}

const link = {
    textDecoration: 'none',
    color: 'inherit',
}

const routesContainer = {
    ...defaultFlex,
}

const routeContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    cursor: 'pointer',
}