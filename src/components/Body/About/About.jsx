import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade'
import Switch from './Switch'

const Bio = require('../../../assets/bio.svg')
const Portrait = require('../../../assets/violet.jpg')

export default function About() {
	const [isText, setTextView] = useState(false)

	const onClickText = () => setTextView(true)
	const onClickImg = () => setTextView(false)

	const switchProps = {
		checked: isText,
		onChange: () => setTextView(!isText)
	}

	return (
		<Fade in={true} {...({ timeout: 700 })}>
		<div style={container}>
			<img src={Portrait} style={portImg} alt={'portrait of violet moon in front of a blue sky and yellow mountains'}/>
			<div style={bioContainer}>
				{isText ? 
					<div style={textBlurb}>
						<div style={title}>Hi, I'm Violet Moon.</div>
						<div>
							This blurb would probably be more legible typed... but potentially
							more representative written. User's choice. I'm a web developer among
							many, evolving things. I innately seek patterns and solutions to life's
							puzzles (and acceptance when there aren't any). Mostly, I enjoy creating,
							leaning on trees, and hugging cats— hoping somewhere in there something
							beautiful and something human unfolds.
						</div>
					</div>
				:
					<img src={Bio} style={blurbImg} alt={'hand-written paragraph about violet moon'}/>
				}
				<div style={btnGroup}>
					<div style={btn} onClick={onClickImg}>pen</div>
					<Switch {...switchProps}/>
					<div style={btn} onClick={onClickText}>keys</div>
				</div>
			</div>
		</div>
		</Fade>
	);
}

const container = {
	display: 'flex',
	alignItems: 'center'
}

const btnGroup = {
	...container,
	marginTop: 20,
	fontSize: 10,
	cursor: 'pointer',
}

const btn = {
	margin: 5
}

const bioContainer = {
	display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 280
}

const blurbImg = {
	width: 350,
	height: 'auto'
}

const portImg = {
	width: 400,
	height: 'auto',
	marginRight: 40,
}

const title = {
	fontWeight: 700,
	fontSize: 20,
	marginBottom: 10
}

const textBlurb = {
	...blurbImg,
	lineHeight: 1.7,
	fontWeight: 300
}


