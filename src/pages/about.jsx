import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from '@/images/me.jpeg'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Inderdeep Singh"
        description={siteMeta.description}
        canonical="https://inderdeepsync.netlify.app/about"
        openGraph={{
          url: 'https://inderdeepsync.netlify.app/about',
          images: [
            {
              url: `https://raw.githubusercontent.com/InderdeepSync/spotlight/main/public/opengraph-image.png`,
              alt: 'Og Image Alt',
              type: 'image/png',
            }
          ],
          siteName: 'inderdeepsync.netlify.app',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Inderdeep Singh and I enjoy creating things that live on the internet.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
                Howdy! Thanks for stopping by. I’m Inderdeep and I’ve been doing technology
                things and coding for as long as I can remember.
                Here&apos;s how I got where we are now:
              </p>
              <p>
                I was born in 1998 in New Delhi, India.
              </p>
              <p>
                After graduating from BITS Pilani(India) and working for a brief period at Birdeye, I went to Bishop&apos;s University
                where I graduated top of the class with a Masters in Computer Science degree in 2023.
              </p>
              <p>
                Apart from the courses included in my degree, I&apos;ve taken a number of online courses and workshops such as
                Deep Javascript Foundations, Epic React, ES6: The Right Parts, Advanced Python, and I&apos;m currently taking CSS for JS.
              </p>
              <p>
                Throughout my career, I&apos;ve worked with a ton of developers in my role as a team member at companies I&apos;ve worked at, and
                I&apos;ve found it to be invaluable to collaborate well with others. I value giving credit where it is due and celebrating the successes of others with them.
              </p>
              <p>
                One of the biggest things I&apos;ve realized is that you can be the smartest and most skilled software developer in the world,
                but if you&apos;re not kind to those with whom you interact, you&apos;ll never reach your full potential and you&apos;ll always be
                chasing the next thing to bring you happiness in life. Be kind.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon}>
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
