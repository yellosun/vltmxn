import React from 'react';
import { projects } from './constants'

export function Card({ name, description, img, stack, actions}) {
    return (
        <React.Fragment>
            <div style={card}>
                <img src={img} style={demoImg} onClick={null}/>
                <div>{name}</div>
                <div style={desc}>{description}</div>
                <div style={s}>Stack: {stack}</div>
            </div>

            <div>
                <img src={img} style={expandedImg}/>
            </div>
        </React.Fragment>
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

const demoImg = {
    width: 200,
    cursor: 'pointer',
    transition: 'all ease .5s',
}

const expandedImg = {
    width: 600,
}

const desc = {
    fontWeight: 500,
    marginTop: 5
}

const s = {
    ...desc,
    fontStyle: 'italic',
}