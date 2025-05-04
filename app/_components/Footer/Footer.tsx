import Image from 'next/image'
import React from 'react'
import Logo from '@/public/oglogo.png'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import clsx from "clsx";
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

async function Footer() {

  const t = await getTranslations('Footer')

  interface LinkProps {
    name: string,
    value: string
  }

  const navLinks: LinkProps[] = [
    { name: 'Home', value: '/' },
    { name: 'About', value: '/about' },
    { name: 'Skills', value: '/skills' },
    { name: 'Projects', value: '/projects' },
  ];

  return (
    <footer className='max-w-[1200px] mx-auto text-light-text dark:text-dark-text'>
      <div className='mx-6 xl:mx-0'>
        <div className='mt-20 mb-8 flex flex-col lg:flex-row justify-normal lg:place-items-center lg:place-content-between lg:pl gap-y-6 border-t-[1px] border-light-text dark:border-dark-text'>
          <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 my-4 sm:flex-row sm:justify-self-start">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tighter transition-colors duration-150 text-light-text dark:text-dark-text hover:text-dark-secondary hover:dark:text-blue-secondary"
            >
              ThaOgBrando
            </Link>
            <span
              className="hidden text-5xl font-extralight leading-[0] sm:inline"
              aria-hidden={true}
            >
              /
            </span>
            <p className="text-light-text/80 dark:text-dark-text/80 text-sm">
              © {new Date().getFullYear()} ThaOgBrando
            </p>
          </div>
          <nav className="navigation place-items-center" aria-label="Footer Navigation">
            <ul className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <React.Fragment key={`${index}_${link.value}`}>
                  <li>
                    <Link
                      className={clsx(
                        "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold transition-colors duration-150 text-light-text dark:text-dark-text hover:text-dark-secondary hover:dark:text-blue-secondary",
                      )}
                      href={link.value}
                    >
                      {link.name}
                    </Link>
                  </li>
                  {index < navLinks.length - 1 && (
                    <span
                      className="text-4xl font-thin leading-[0]"
                      aria-hidden="true"
                    >
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
          <div className="socials inline-flex justify-center lg:justify-end">
            <Link
              href={'https://github.com/thaogbrando'}
              className="p-2 text-2xl transition-all duration-150 hover:scale-125 hover:dark:text-dark-secondary hover:text-blue-secondary"
              aria-label={'ThaOgBrando' + " on GitHub"}
            >
              <FaGithub />
            </Link>


            <Link
              href={'https://linkedin.com/in/brandon-u-325706361'}
              className="p-2 text-2xl transition-all duration-150 hover:scale-125 hover:dark:text-dark-secondary hover:text-blue-secondary"
              aria-label={'ThaOgBrando' + " on Linkden"}
            >
              <FaLinkedin />

            </Link >


            <Link
              href={'https://discord.com/users/478299681806614551'}
              className="p-2 text-2xl transition-all duration-150 hover:scale-125 hover:dark:text-dark-secondary hover:text-blue-secondary"
              aria-label={'ThaOgBrando' + " on Discord"}
            >
              <FaDiscord />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer