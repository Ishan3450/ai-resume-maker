const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    resumeTitle: { type: String, default: "Resume", required: true },
    createdByEamil: { type: String, required: true },
    firstName: { type: String, default: 'James' },
    lastName: { type: String, default: 'Carter' },
    address: { type: String, default: 'Ahmedabad, Gujarat, India' },
    phone: { type: String, default: '+91 1234567890' },
    email: { type: String, default: 'example@gmail.com' },
    summary: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },

    experience: [
        {
            title: { type: String, default: 'Full Stack Developer' },
            companyName: { type: String, default: 'Amazon' },
            city: { type: String, default: 'New York' },
            state: { type: String, default: 'NY' },
            startDate: { type: String, default: 'Jan 2021' },
            endDate: { type: String, default: '' },
            currentlyWorking: { type: Boolean, default: true },
            workSummary: { type: String, default: 'Designed, developed, and maintained full-stack applications using React and Node.js.' }
        },
        {
            title: { type: String, default: 'Frontend Developer' },
            companyName: { type: String, default: 'Google' },
            city: { type: String, default: 'Charlotte' },
            state: { type: String, default: 'NC' },
            startDate: { type: String, default: 'May 2019' },
            endDate: { type: String, default: 'Jan 2021' },
            currentlyWorking: { type: Boolean, default: false },
            workSummary: { type: String, default: 'Designed, developed, and maintained full-stack applications using React and Node.js.' }
        }
    ],

    education: [
        {
            universityName: { type: String, default: 'Western Illinois University' },
            startDate: { type: String, default: 'Aug 2018' },
            endDate: { type: String, default: 'Dec 2019' },
            degree: { type: String, default: 'Master' },
            major: { type: String, default: 'Computer Science' },
            description: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            grade: { type: String, default: '3.4' }
        },
        {
            universityName: { type: String, default: 'Western Illinois University' },
            startDate: { type: String, default: 'Aug 2018' },
            endDate: { type: String, default: 'Dec 2019' },
            degree: { type: String, default: 'B. Tech' },
            major: { type: String, default: 'Computer Science' },
            description: { type: String, default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            grade: { type: String, default: '9.8' }
        }
    ],

    skills: {
        Frontend: { type: String, default: 'Angular, React, React Native' },
        Backend: { type: String, default: 'Node' },
        Database: { type: String, default: 'MySql, MongoDB' },
        Other: { type: String, default: 'DevOps, Kubernetes, AWS' }
    },

    projects: [
        {
            name: { type: String, default: 'MilkPrism' },
            github: { type: String, default: 'https://www.github.com' },
            techStack: { type: String, default: 'HTML, CSS, JS, PHP, MySQL' },
            description: { type: String, default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
        },
        {
            name: { type: String, default: 'JobHunt' },
            github: { type: String, default: 'https://www.github.com' },
            techStack: { type: String, default: 'ReactJs, Express, NodeJS, MongoDB, JS' },
            description: { type: String, default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
        }
    ],

    links: { type: [String], default: [] },
    linkedin: { type: String, default: 'https://www.linkedin.com' },
    github: { type: String, default: 'https://www.github.com' },
    leetcode: { type: String, default: 'https://www.leetcode.com' },
    portfolio: { type: String, default: 'https://www.youtube.com' }

});

module.exports = mongoose.model('resume', resumeSchema);