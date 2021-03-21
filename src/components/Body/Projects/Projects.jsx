import React, { useState } from 'react';
import { projects } from './constants'

export function Card({ name, description, img, stack, actions, lastCard}) {
    const [hover, setHover] = useState(false)
    const cardStyle = {
        ...card,
        marginRight: !lastCard && hover ? 0 : -100,
        marginTop: hover ? -20 : 0,
    }

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={cardStyle}
        >
            <img src={img} style={demoImg} onClick={null}/>
            <div style={cardText}>
                <div>{name}</div>
                <div style={desc}>{description}</div>
                <div style={s}>Stack: {stack}</div>
            </div>
            <div style={actionContainer}>
                {actions.view && <a href={actions.view}>View</a>}
                {actions.code && <a href={actions.code}>Code</a>}
            </div>
        </div>
    )
}

export default function Projects() {
    const projectValues = Object.values(projects)

    return (
        <div style={container}>
            {projectValues.map((card, index) => {
                const lastCard = projectValues.length - 1 === index
                return <Card {...card} lastCard={lastCard}/>
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
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'relative',
    transition: 'all ease .5s',
    boxShadow: '-1px 1px 10px .1px rgba(0, 0, 0, 0.14)'
}

const cardText = {
    padding: 10
}

const demoImg = {
    width: 200,
    cursor: 'pointer',
    transition: 'all ease .5s',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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

const actionContainer = {
    position: 'absolute',
    bottom: 0,
    padding: '0 0 10px 10px'
}