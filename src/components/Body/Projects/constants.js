const ceq = require('../../../assets/ceq.jpg')
const crunch = require('../../../assets/crunch.jpg')
const boba = require('../../../assets/boba.jpg')
const awake = require('../../../assets/awake.jpg')
const grid = require('../../../assets/grid.jpg')

export const projects = {
    CEQ: {
        name: 'CryptoEQ',
        description: 'Built crypto sentiment analysis desktop and mobile frontend, admin management platform, and telegram bot.',
        img: ceq,
        stack: 'React, Redux, JavaScript',
        actions: {
            view: 'https://www.cryptoeq.io/dashboard',
            code: null
        }
    },
    AWAKE: {
        name: 'Awake',
        description: 'Built daily log entry and meditation timer with visually aggregated data, and mindfulness-based quotes API.',
        img: awake,
        stack: 'Ruby on Rails, Node, React, Redux, JavaScript',
        actions: {
            view: null,
            code: 'https://github.com/yellosun/awake-fe'
        }
    },
    GRID: {
        name: 'Grid Designer',
        description: 'Built customizable and adjustable grid to design and download block patterns with palette selector.',
        img: grid,
        stack: 'React, Hooks, Context, JavaScript',
        actions: {
            view: null,
            code: 'https://github.com/yellosun/gridesigner'
        }
    },
    CRUNCH: {
        name: 'Crunch.io',
        description: 'Built dataset importer panels and architected admin user and team permissions panels and permissions editing modal series.',
        img: crunch,
        stack: ' React, Sagas, Angular1, TypeScript',
        actions: {
            view: 'https://crunch.io/powerful-survey-analytics/',
            code: null
        }
    },
    BOBA: {
        name: 'BobaMe',
        description: 'Designed and prototyped San Francisco boba tea mobile sign up, login, ordering, and checkout.',
        img: boba,
        stack: 'Figma, Photoshop',
        actions: {
            view: 'https://www.figma.com/file/AMOnS6XG44jBzlYOnIlU6j/BobaMe?node-id=0%3A1',
            code: null
        }
    }
}