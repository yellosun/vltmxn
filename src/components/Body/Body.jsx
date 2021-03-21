import React from 'react';
import About from './About'
import Projects from './Projects'
import { Switch, Route } from "react-router-dom";

export default function Body() {
  return (
    <div style={container}>
        <Switch>
            <Route path='/projects'>
                <Projects />
            </Route>
            <Route path='/'>
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
    alignItems: 'center'
}