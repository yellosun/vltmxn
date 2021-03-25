import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const Bio = require('../../../assets/bio.jpg')
const Portrait = require('../../../assets/violet.png')

export const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#c3ae86',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#92bcd0',
      '& + $track': {
        opacity: 1,
        backgroundColor: '#c2e3f3',
        borderColor: '#c2e3f3',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#c2e3f3',
  },
  checked: {},
}))(Switch);



export default function About() {
	const [isText, setTextView] = useState(false)

	const onClickText = () => setTextView(true)
	const onClickImg = () => setTextView(false)

	return (
		<Fade in={true} {...({ timeout: 700 })}>
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
					<div style={btn} onClick={onClickImg}>pen</div>
					<AntSwitch checked={isText} onChange={() => setTextView(!isText)} name="checkedC" />
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

const selectedBtn = {
	...btn,
	border: '1px solid #87b3ce',
	backgroundColor: '#d2c1d9'
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
	// borderRadius: 10,
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


