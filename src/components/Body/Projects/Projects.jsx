import React, { useState, useCallback } from 'react';
import { projects } from './constants'


export function Links({ actions }) {
    const [hover, setHover] = useState(false)

    const linkStyle = {
        ...link,
        border: '1px solid black',
        marginBottom: 5,
        backgroundColor: hover ? 'rgba(0, 0, 0, 0.05)' : '',
    }
    return (
        <div
            style={{marginTop: -5}}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {actions.view && <a style={linkStyle} target='_blank' href={actions.view}>View</a>}
            {actions.code && <a style={linkStyle} target='_blank' href={actions.code}>Code</a>}
        </div>
    )
}

export function Card(props) {
    const [hover, setHover] = useState(false)

    const cardStyle = {
        ...card,
        marginBottom: !props.lastCard && hover ? 0 : -200,
    }

    const onCardClick = () => {
        return !props.lastCard && props.nextCard(props.id)
    }

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={onCardClick}
            style={cardStyle}
        >
            <div>
                <img src={props.img} style={demoImg} onClick={null}/>
            </div>
            {props.lastCard &&
                <div style={cardText}>
                    <div>{props.name}</div>
                    <div style={desc}>{props.description}</div>
                    <div style={actionContainer}>
                        <div style={stack}>Stack: {props.stack}</div>
                        <Links actions={props.actions} />
                    </div>
                </div>
            }
        </div>
    )
}

export default function Projects() {
    const projectValues = Object.values(projects)
    const [cards, setCards] = useState(projectValues)

    const nextCard = (id) => {
        const selectedCard = projects[id]
        let newCards

        if (selectedCard) {
            const filteredCards = cards.filter((card) => card.id !== id)
            newCards = [...filteredCards, selectedCard]
        } else {
            const last = cards.pop()
            newCards = [last, ...cards]
        }

        setCards(newCards)
    }

    return (
        <React.Fragment>
        <div style={container}>
            {cards.map((card, index) => {
                const lastCard = projectValues.length - 1 === index
                const cardProps = {...card, lastCard, nextCard}
                return <Card {...cardProps} />
            })
        }
        </div>
        <button onClick={nextCard}>Next Card</button>
        </React.Fragment>
);
}

const container = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    marginTop: -200,
}

const card = {
    display: 'flex',
    flexDirection: 'column',
    width: 450,
    backgroundColor: 'white',
    transition: 'all ease .5s',
    boxShadow: '-1px 1px 10px .1px rgba(0, 0, 0, 0.14)'
}

const cardText = {
    padding: 15,
}

const demoImg = {
    width: 450,
    cursor: 'pointer',
}

const desc = {
    fontWeight: 500,
    marginTop: 5
}

const stack = {
    ...desc,
    fontStyle: 'italic',
}

const actionContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10
}

const link = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '5px 15px',
    borderRadius: 3,
    transition: 'all ease .1s',
}   