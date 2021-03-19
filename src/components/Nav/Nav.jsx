import React, { useContext } from 'react';
import { Context, routes } from '../Home'

export function Routes() {
    const { selectedRoute, changeRoute } = useContext(Context)

    const onClick = (route) => {
        changeRoute(route)
    }

    return Object.values(routes).map((route) => {
        const isSelected = route === selectedRoute

        return (
            <div key={route} style={routeContainer} onClick={() => onClick(route)}>
                <div>
                    {route}
                    <span style={isSelected ? selectedCircle : unSelectedCircle}></span>
                </div>
            </div>  
        )
    })
}

export default function Nav() {
    return (
        <div style={container}>
            {/*<div style={logo}>
                V.M.
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

const routesContainer = {
    ...defaultFlex,
}

const routeContainer = {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    cursor: 'pointer',
}

const unSelectedCircle = {
    height: 10,
    width: 10,
    marginLeft: 5,
    borderRadius: '100%',
    // border: '1px solid black',
    border: '1px solid rgba(0,0,0,.14)',
    backgroundColor: 'rgba(0,0,0,0)'
}

const selectedCircle = {
    ...unSelectedCircle,
    border: '1px solid rgba(0,0,0,.14)',
    backgroundColor: 'black',
}