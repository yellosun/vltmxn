import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Work.css'
const school = require('../../../assets/school.jpg')
const work = require('../../../assets/computer.jpg')

export function WorkIcon() {
	return <img style={icon} src={work}/>
}

export function SchoolIcon() {
	return <img style={icon} src={school}/>
}

export default function Work() {

  return (
    <div style={container}>
    	<VerticalTimeline>
    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#d2c1d9'}}
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
    			contentStyle={{...contentStyle, backgroundColor: '#87b3ce'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<WorkIcon/>}
    		>
				<div style={title}>Frontend Developer</div>
			    <div style={subTitle}>Crunch.io</div>
			    <div style={body}>
			    	Redesigned data layer, implemented TypeScript, migrated Angular1 code to React,
				    and introduced new data visualization features across the app.
			    </div>
			    <div style={date}>Mar 2019 - Nov 2020</div>
    		</VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#cadde2'}}
			    contentArrowStyle={contentArrowStyle}
    			iconStyle={iconStyle}
    			icon={<WorkIcon/>}
    		>
				<div style={title}>Web Developer</div>
			    <div style={subTitle}>Block Party</div>
			    <div style={body}>
			    	Developed client's fullstack web apps including real-time crypto sentiment analysis
			    	platform in a month and oral hygiene mobile, tablet, and desktop sales funnel in a week.
			    </div>
			    <div style={date}>Jan 2018 - Aug 2019</div>
    		</VerticalTimelineElement>

    		<VerticalTimelineElement
    			contentStyle={{...contentStyle, backgroundColor: '#a6abe7'}}
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
    			contentStyle={{...contentStyle, backgroundColor: '#baa3d8'}}
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
    			contentStyle={{...contentStyle, backgroundColor: '#96b7d6'}}
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

// #c9aee2
// #aeb7e2
// #6a81ec
// #7abcbf
// #a2d0d2
// #bb5004
// #89980f
// #0f9298
// #82bbbd

const contentStyle = {
	// border: '4px solid #e7c283',
	backgroundColor: '#e7c283',
	boxShadow: 'rgb(0 0 0 / 14%) -1px 1px 10px 0.1px',
	// boxShadow: 'none'
}

// #348daf
// #17283e
// #91b2bf

const contentArrowStyle = {
	borderRight: '7px solid  black',
	marginLeft: 2,
	marginRight: 1
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
	// color: '#e7c283'
}

const date = {
	marginBottom: 0
}

const body = {
	fontSize: 12,
	fontWeight: 500,
	margin: '10px 0',
	fontStyle: 'italic',
	color: 'rgba(0, 0, 0, 0.50)'
}
