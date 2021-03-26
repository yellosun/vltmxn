import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { routes } from './constants'
const Resource = require('../../assets/resources.pdf')
const Download = require('../../assets/flower-dwnld.jpg')

export function Routes() {
    const { pathname } = useLocation()
    const [selectedRoute, changeRoute] = useState(pathname)

    return Object.values(routes).map((page) => {
        const isSelected = page.route === selectedRoute
        
        return page.route === routes.RESOURCES.route ? (
            <div style={resourceContainer}>
            <img style={downloadStyle} src={Download} alt={'hand-drawn icon of a flower with a download symbol center'} />
            <a target='_blank' rel='noopener noreferrer' style={{...link, marginTop: 20}} href={Resource}>Resources</a>
            </div>
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
            <div style={logo}>VM</div>
            <div style={defaultFlex}>
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
    height: 35,
    width: 35,
    fontWeight: 700,
}

const link = {
    textDecoration: 'none',
    color: 'inherit',
}

const downloadStyle = {
    height: 80,
    marginBottom: -55,
    marginRight: 5
}

const resourceContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}

const routeContainer = {
    ...resourceContainer,
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
    cursor: 'pointer',
}