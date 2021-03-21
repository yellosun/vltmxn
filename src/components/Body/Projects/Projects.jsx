import React from 'react';
import { projects } from './constants'
import './projects.css'

export function Card({ name, description, img, stack, actions}) {
    return (
        <div style={card}>
            <img src={img} className={'image'}/>
            <div>{name}</div>
            <div style={desc}>{description}</div>
            <div style={s}>Stack: {stack}</div>
        </div>

        <div></div>
    )
}

export default function Projects() {
  return (
    <div style={container}>
        {Object.values(projects).map((card) => {
            return <Card {...card} />
        })
        }
    </div>
  );
}

const container = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
}

const card = {
    width: 200,
    padding: 20    
}

const image = {
    width: 200,
    cursor: 'pointer',
    transition: 'all ease .5s',

    '&:hover': {
        transform: 'scale(1.5)',
    }
}

const desc = {
    fontWeight: 500,
    marginTop: 5
}

const s = {
    ...desc,
    fontStyle: 'italic',
}