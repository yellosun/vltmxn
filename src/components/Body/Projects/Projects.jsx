import React, { useState } from 'react';
import { projects } from './constants'


export function Links({ actions }) {
    const [hover, setHover] = useState(false)

    const linkStyle = {
        ...linkContainer,
        transform: hover ? 'scale(1.2)' : ''
    }
    return (
        <div
            style={linkStyle}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {actions.view && (
                <a target='_blank' rel='noopener noreferrer' href={actions.view.link}>
                    <img style={{height: '100%', width: 50}} src={actions.view.img}/>
                </a>
            )}
            {actions.code && (
                <a target='_blank' rel='noopener noreferrer' href={actions.code.link}>
                    <img style={{height: '100%', width: 50}} src={actions.code.img}/>
                </a>
            )}
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
        {/*<button onClick={nextCard}>Next Card</butt[on>*/}
        </React.Fragment>
);
}

const container = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    marginTop: -200,
    transition: 'all ease 3s',
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

const linkContainer = {
    marginTop: -5,
    marginBottom: -10,
    transition: 'all ease .3s',
}
