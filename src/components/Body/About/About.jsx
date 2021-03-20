import React, { useState } from 'react';
const Bio = require('../../../assets/bio.jpg')
const Portrait = require('../../../assets/violet_col.jpg')

export default function About() {
	const [isText, setTextView] = useState(false)

	const onClickText = () => setTextView(true)
	const onClickImg = () => setTextView(false)

	return (
		<div style={container}>
			<img src={Portrait} style={portImg}/>
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
					<img src={Bio} style={blurbImg}/>
				}
				<div style={btnGroup}>
					<div style={isText ? btn : selectedBtn} onClick={onClickImg} />
					<div style={isText ? selectedBtn : btn} onClick={onClickText} />
					{/*<div style={{marginRight: 5, textDecoration: !isText && 'underline'}} onClick={onClickImg}>written</div>
					<div style={{textDecoration: isText && 'underline'}} onClick={onClickText}>typed</div>*/}
					
				</div>
			</div>
		</div>
	);
}

const container = {
	display: 'flex',
	alignItems: 'center'
}

const btnGroup = {
	display: 'flex',
	alignItems: 'center',
	marginTop: 20,
	fontSize: 10,
	fontStyle: 'italic',
	cursor: 'pointer',
}

const btn = {
	height: 10,
	width: 10,
	marginRight: 5,
	borderRadius: '100%',
	cursor: 'pointer',
	// backgroundColor: 'rgba(0,0,0,.14)',
	border: '1px solid rgba(0,0,0,.14)',
}

const selectedBtn = {
	...btn,
	border: '1px solid black',
	backgroundColor: 'black'
}

const bioContainer = {
	display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250
}

const blurbImg = {
	width: 350,
	height: 'auto'
}

const portImg = {
	width: 200,
	height: 'auto',
	marginRight: 40,
	borderRadius: '10%'
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


