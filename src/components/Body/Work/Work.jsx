import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css'
const School = require('../../../assets/school.jpg')
const Work = require('../../../assets/computer.jpg')
const Tape = require('../../../assets/tape.jpg')

export function WorkIcon() {
	return <img style={icon} src={Work}/>
}

export function SchoolIcon() {
	return <img style={icon} src={School}/>
}

export default function Work() {
  return (
    <div style={container}>
    	<VerticalTimeline>
    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#dbd1f1'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<SchoolIcon/>}
    		>
				<div style={title}>Mobile UI/UX</div>
			    <div style={subTitle}>Udemy</div>
			    <div style={body}>
			    	Worked in Figma to create interactive prototypes. Implemented transitions, overlays and
			    	modals with smart animate and learned how to export assets for engineering and collaboration
			    	best practices within Figma.
			    </div>
			    <div style={date}>Jan 2021</div>
    		</VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#aae8e6'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<WorkIcon/>}
    		>
				<div style={title}>Frontend Developer</div>
			    <div style={subTitle}>Crunch.io</div>
			    <div style={body}>
			    	Redesigned data layer, implemented TypeScript, migrated Angular1 code to React,
				    and introduced new data visualization features across the app while maintaining unit and functional tests.
			    </div>
			    <div style={date}>Mar 2019 - Nov 2020</div>
    		</VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#c2e3f3'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<WorkIcon/>}
    		>
				<div style={title}>Web Developer</div>
			    <div style={subTitle}>Block Party</div>
			    <div style={body}>
			    	Developed client's fullstack web apps including a real-time crypto sentiment analysis
			    	platform and an oral hygiene mobile, tablet, and desktop sales funnel.
			    </div>
			    <div style={date}>Jan 2018 - Aug 2019</div>
    		</VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#bfc4ff'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<SchoolIcon/>}
    		>
				<div style={title}>Software Engineering</div>
			    <div style={subTitle}>Flatiron School</div>
			    <div style={body}>
			    	Completed 700+ hours studying the software development cycle. Presented on computing
			    	algorithms, wrote 6 technical blogs, and built 5 projects (3 fullstack, 1 frontend, 1
			    		backend) in 4 months.

			    </div>
			    <div style={date}>Aug 2018 - Dec 2018</div>
			    </VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#e8d6ff'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<WorkIcon/>}
    		>
				<div style={title}>Creative Startup Consultant</div>
			    <div style={subTitle}>Tiger Space Digital</div>
			    <div style={body}>
			    	Worked 1-on-1 with first-time entrepreneurs to develop cohesive, humanist-centered
			    	digital marketing strategies. Designed web templates, email and ad campaigns,
			    	and branding portfolios.
			    </div>
			    <div style={date}>May 2016 - Aug 2018</div>
			    </VerticalTimelineElement>

			    <VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#a6cbef'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<SchoolIcon/>}
    		>
				<div style={title}>Marketing</div>
			    <div style={subTitle}>University of Houston</div>
			    <div style={body}>
			    	Graduated in 3 years from C.T. Bauer Business Honors College with a specialization in Digital
			    	Marketing and certification in Global Research. Founding Ambassador of The Center for Diversity
			    	and Inclusion while a Residential Advisor and LGBTQA+ Ally.
			    </div>
			    <div style={date}>Aug 2014 - May 2017</div>
			    </VerticalTimelineElement>
    	</VerticalTimeline>
    </div>
  );
}

const container = {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 600,
    width: 800
}

const contentStyle = {
	boxShadow: 'rgb(0 0 0 / 14%) -1px 1px 10px 0.1px',
}

const contentArrowStyle = {
	borderRight: '7px solid  black',
	margin: '0 2px',
}


const iconStyle = {
	boxShadow: 'none',
}

const icon = {
	height: '100%',
	width: '100%',
}

const title = {
	fontSize: 15,
}

const subTitle = {
	fontSize: 'inherit',
	fontWeight: 500,
}

const date = {
	marginBottom: 0
}

const body = {
	fontSize: 12,
	fontWeight: 500,
	margin: '10px 0',
	fontStyle: 'italic',
	color: 'rgba(0, 0, 0, 0.80)'
}
