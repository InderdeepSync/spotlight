
import logoBirla from '@/images/logos/birla.webp'
import logoBirdeye from '@/images/logos/birdeye.webp'
import logoShorthills from '@/images/logos/shorthills.png'
import logoBishop from '@/images/logos/bishop.png'
import logoBits from '@/images/logos/bits.png'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Inderdeep Singh",
    description: "Inderdeep Singh is a software engineer, avid programmer, chess fanatic and writer.",
    copyright: "Inderdeep Singh",
    author: {
        name: "Inderdeep Singh",
        email: "inderdeepsync@gmail.com",
        twitter: "https://twitter.com/InderdeepSync",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://www.instagram.com/inderdeepsync/",
        github: "https://github.com/InderdeepSync",
        linkedin: "https://www.linkedin.com/in/inderdeep-sync",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://brian.dev"
}
 export const work = [
    {
      company: `Bishop's University`,
      title: 'Research Assistant',
      logo: logoBishop,
      start: 'Oct 2022',
      end: {
        label: 'Dec 2022',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Birdeye',
      title: 'Software Developer',
      logo: logoBirdeye,
      start: 'Nov 2020',
      end: 'July 2021',
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
            label: 'Dec 2022',
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
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;