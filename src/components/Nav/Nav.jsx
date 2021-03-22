import React, { useState,   useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { routes } from './constants'

export function Routes() {
    const { pathname } = useLocation()
    const [selectedRoute, changeRoute] = useState(pathname)

    return Object.values(routes).map((page) => {
        const isSelected = page.route === selectedRoute
        
        return (
            <div key={page.route} style={routeContainer} onClick={() => changeRoute(page.route)}>
                <Link to={page.route} style={{...link, fontWeight: isSelected && 300}}>
                    {page.label}
                </Link>
                {/*<div style={isSelected ? selectedCircle : unSelectedCircle}></div>*/}
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

const unSelectedCircle = {
    height: 10,
    width: 10,
    marginLeft: 5,
    borderRadius: '100%',
    border: '1px solid rgba(0,0,0,.14)',
    backgroundColor: 'rgba(0,0,0,0)'
}

const selectedCircle = {
    ...unSelectedCircle,
    border: '1px solid rgba(0,0,0,.14)',
    backgroundColor: 'black',
}