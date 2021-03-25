import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from './About'
import Projects from './Projects'
import Work from './Work'
import Contact from './Contact'
import { routes } from '../Nav'
const Resource = require('../../assets/resources.pdf')

export default function Body() {
  return (
    <div style={container}>
        <Switch>
            <Route path={routes.CONTACT.route}>
                <Contact />
            </Route>
            <Route path={routes.WORK.route}>
                <Work />
            </Route>
            <Route path={routes.PROJECTS.route}>
                <Projects />
            </Route>
            <Route path={routes.ABOUT.route}>
            	<About />
            </Route>
        </Switch>
    </div>
  );
}

const container = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll'
}

const resources = {
    textDecoration: 'none',
    color: 'inherit',
    marginTop: 20
}