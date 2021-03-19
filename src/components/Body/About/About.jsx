import React, { useState } from 'react';
const Bio = require('../../../assets/bio.jpg')

export default function About() {
	const [isText, setTextView] = useState(false)

	const onClickText = () => setTextView(true)
	const onClickImg = () => setTextView(false)

	return (
		<div style={container}>
			{/*{isText ? }*/}
			<img src={Bio} style={image}/>
			<div style={btnGroup}>
				<div style={isText ? btn : selectedBtn} onClick={onClickImg} />
				<div style={isText ? selectedBtn : btn} onClick={onClickText} />
			</div>
		</div>
	);
}

const container = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
}

const btnGroup = {
	display: 'flex',
	marginTop: 20

}

const btn = {
	border: '1px solid black',
	borderRadius: '100%',
	cursor: 'pointer',
	height: 10,
	width: 10,
	marginRight: 5
}

const selectedBtn = {
	...btn,
	backgroundColor: 'black'
}

const image = {
	height: '100%',
	width: '400px',
}