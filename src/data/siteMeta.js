
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
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
 export const resume = [
    {
      company: 'Amazon',
      title: 'Principal Developer Advocate',
      logo: logoAmazon,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Microsoft',
      title: 'Principal Cloud Developer Advocate',
      logo: logoMicrosoft,
      start: '2017',
      end: '2022',
    },
    {
      company: 'XOR Data Exchange',
      title: 'CIO',
      logo: logoXOR,
      start: '2014',
      end: '2016',
    },
    {
      company: 'Clarity Services, Inc.',
      title: 'COO',
      logo: logoClarity,
      start: '2008',
      end: '2014',
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