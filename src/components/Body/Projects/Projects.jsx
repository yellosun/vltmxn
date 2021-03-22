import React, { useState, useCallback } from 'react';
import { projects } from './constants'

export function Card(props) {
    const [hover, setHover] = useState(false)

    const cardStyle = {
        ...card,
        marginBottom: !props.lastCard && hover ? 0 : -100,
        // marginTop: hover ? -150 : 0,
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
                    <div style={stack}>Stack: {props.stack}</div>
                    <div style={actionContainer}>
                        {props.actions.view && <a style={link} target='_blank' href={props.actions.view}>View</a>}
                        {props.actions.code && <a style={link} target='_blank' href={props.actions.code}>Code</a>}
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
    marginTop: -100,
    // transition: 'all ease .5s',
}

const card = {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    transition: 'all ease .5s',
    boxShadow: '-1px 1px 10px .1px rgba(0, 0, 0, 0.14)'
}

const cardText = {
    padding: 10,
}

const demoImg = {
    width: 300,
    cursor: 'pointer',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    padding: '5px 0',
    // backgroundColor: '#fbe700',
    // backgroundColor: '#dec191',
    // backgroundColor: 'black',
    // color: 'white',
    // textAlign: 'center'
}

const link = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '0 10px'
}