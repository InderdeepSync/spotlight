import logoBirla from '@/images/logos/birla.png'
import logoBirdeye from '@/images/logos/birdeye.png'
import logoUnscript from '@/images/logos/unscript.png'
import logoShorthills from '@/images/logos/shorthills.png'
import logoBishop from '@/images/logos/bishop.png'
import logoBits from '@/images/logos/bits.png'
import logoReact from "@/images/logos/react.png"
import logoDjango from "@/images/logos/cart.png"
import logoPython from "@/images/logos/python.png"

import mlIcon from '@/images/logos/ml.png'
import logoBulletin from '@/images/logos/bulletin.png'

const siteMeta = {
    title: "Inderdeep Singh",
    description: "Inderdeep Singh is a software engineer, avid programmer, chess fanatic and writer.",
    copyright: "Inderdeep Singh",
    author: {
        name: "Inderdeep Singh",
        email: "inderdeepsync@gmail.com",
        twitter: "https://twitter.com/InderdeepSync",
        instagram: "https://www.instagram.com/inderdeepsync/",
        github: "https://github.com/InderdeepSync",
        linkedin: "https://www.linkedin.com/in/inderdeep-sync",
    },
    siteUrl: "https://inderdeepsync.netlify.app"
}
export const work = [
    {
        company: 'Unscript.ai',
        title: 'Software Engineer',
        logo: logoUnscript,
        start: 'Oct 2023',
        end: 'Present',
    },
    {
        company: `Bishop's University`,
        title: 'Research Assistant',
        logo: logoBishop,
        start: 'Nov 2022',
        end: {
            label: 'Dec 2022',
            dateTime: new Date().getFullYear(),
        },
    },
    {
        company: 'Birdeye',
        title: 'Software Developer',
        logo: logoBirdeye,
        start: 'June 2020',
        end: 'Dec 2022',
    },
    {
        company: 'Shorthills Tech.',
        title: 'Software Engineer Intern',
        logo: logoShorthills,
        start: 'July 2019',
        end: 'Dec 2019',
    },
    {
        company: 'Grasim Industries Limited',
        title: 'Software Engineer Intern',
        logo: logoBirla,
        start: 'May 2018',
        end: 'July 2018',
    },
]

export const education = [
    {
        company: `Bishop's University`,
        title: 'MSc. Comp. Science',
        logo: logoBishop,
        start: 'Sep 2021',
        end: {
            label: 'June 2023',
            dateTime: new Date().getFullYear(),
        },
    },
    {
        company: 'BITS Pilani',
        title: 'B.E. Comp. Science',
        logo: logoBits,
        start: 'Aug 2016',
        end: 'July 2020',
    },
]

export const projects = [
    {
        name: 'React Mini Games',
        description: `A curated collection of 7 fun & engaging browser games and demos built using React, React Router, CSS Modules and Vite. Includes a classic Todos App, a beautiful Kanban Board and several games such as Tic-Tac-Toe, Memory challenge and more!`,
        link: {href: "https://github.com/InderdeepSync/mini-games", label: 'github.com'},
        logo: logoReact
    },
    {
        name: 'Bulletin Board',
        description:
            `A multi-threaded, distributed TCP network server written in C++ to allow users to reliably store and retrieve messages. Includes a production-grade 
      implementation of synchronization accomplished using the two-phase commit protocol.`,
        link: {href: 'https://github.com/InderdeepSync/bulletin-board', label: 'github.com'},
        logo: logoBulletin,
    },
    {
        name: "AlgoExpert Solutions",
        description: "My custom solutions to 70+ tough programming challenges in python.",
        link: {href: 'https://github.com/InderdeepSync/algoexpert_problems', label: "github.com"},
        logo: logoPython
    },
    {
        name: 'Disease classification using genetic microarray data',
        description:
            `My humble attempt at unraveling the mysteries behind several popular ML classifiers. I discuss the strengths and 
      limitations of each algorithm, and present a methodical, step-by-step approach to tackle similar real-world ML problems using numPy, scikit-learn, matplotlib, etc.`,
        link: {
            href: 'https://gist.github.com/InderdeepSync/1755d76edab4ef848f52e113f6619df9',
            label: 'gist.github.com'
        },
        logo: mlIcon,
    },
    {
        name: 'django E-commerce',
        description: `An ecommerce web application prototype built with python and django. Includes customer registration, authentication, user carts, checkout,
        order management as well as an admin dashboard for inventory and stock management.`,
        link: {href: "https://github.com/InderdeepSync/djangoProject", label: 'github.com'},
        logo: logoDjango
    },
]


export default siteMeta;