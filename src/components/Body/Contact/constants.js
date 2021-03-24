const linkedin = require('../../../assets/linkedin.jpg')
const github = require('../../../assets/github.jpg')
const location = require('../../../assets/location.jpg')
const email = require('../../../assets/email.jpg')
const person = require('../../../assets/person.jpg')

export const icons = {
    PERSON: {
        icon: person,
        link: null,
        text: 'she/her',
        color: '#cadde2',
    },
    LINKEDIN: {
        icon: linkedin,
        link: 'https://www.linkedin.com/in/violetmoon/',
        text: 'linkedin',
        color: '#a6abe7',
    },
    GITHUB: {
        icon: github,
        link: 'https://github.com/yellosun',
        text: 'github',
        color: '#baa3d8',
    },
    LOCATION: {
        icon: location,
        link: null,
        text: 'remote',
        color: '#96b7d6',
    },
    EMAIL: {
        icon: email,
        link: 'mailto:vltmxn@gmail.com',
        text: 'email',
        color: '#87b3ce',
    }
}