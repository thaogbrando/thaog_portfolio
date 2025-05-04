'use client';

import React from 'react'
import Coder from '@/public/coder.png'
import Image from 'next/image'
import { FaArrowCircleDown } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import HeroOrbit from './HeroOrbit';
import { Link } from "react-scroll";

const HeroMain = () => {
  const t = useTranslations('Landing');

  return (
    <section id='hero' className='py-24 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 '>
        <div className='size-[720px] hero-ring'></div>
        <div className='size-[920px] hero-ring'></div>
        <div className='size-[1120px] hero-ring'></div>
        <div className='size-[1320px] hero-ring'></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit obitDuration='40s' shouldSpin spinDuration='3s'>
          <svg className='size-8 text-dark-accent/20' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={510} rotation={-79} shouldOrbit obitDuration='40s' shouldSpin spinDuration='3s'>
          <svg className='size-5 text-dark-accent/20' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit obitDuration='40s'>
          <div className='size-2 rounded-full bg-dark-accent/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit obitDuration='40s' shouldSpin spinDuration='3s'>
          <svg className='size-10 text-dark-accent/20' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit obitDuration='40s' shouldSpin spinDuration='6s'>
          <svg className='size-12 text-blue-primary dark:text-light-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit obitDuration='40s' shouldSpin spinDuration='6s'>
          <svg className='size-8 text-blue-primary dark:text-light-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit obitDuration='40s'>
          <div className='size-3 rounded-full bg-dark-accent/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit obitDuration='40s' shouldSpin spinDuration='3s'>
          <svg className='size-14 text-dark-accent/20' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit obitDuration='40s'>
          <div className='size-3 rounded-full bg-dark-accent/20' />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit obitDuration='40s' shouldSpin spinDuration='6s'>
          <svg className='size-28 text-blue-primary dark:text-light-secondary' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
          </svg>
        </HeroOrbit>
      </div>
      <div className='px-4'>
        <div className='flex flex-col items-center'>
          <Image
            className='size-[100px]'
            src={Coder}
            alt='person coding'
          />
          <div className='border dark:border-dark-text border-light-text px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-dot size-2.5 rounded-full relative'>
              <div className='bg-green-dot absolute inset-0 rounded-full dot-pulse'></div>
            </div>
            <p className='text-sm font-semibold text-light-text dark:text-dark-accent'>{t('Available')}</p>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-6xl font-black text-center text-light-text dark:text-dark-text mt-8 tracking-wide'>{t('Building')}</h1>
          <p className='mt-4 text-center text-light-text/80 dark:text-dark-text/80 md:text-lg'>{t('Passionate')}</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to={'projects'}
            onClick={() => { }} className='z-[75] inline-flex items-center gap-2 border border-light-text text-light-text hover:bg-blue-primary/80 bg-blue-primary dark:border-dark-text dark:text-dark-text dark:bg-dark-background dark:hover:text-dark-text/80 px-6 h-12 rounded-xl cursor-pointer'>
            <span className='font-semibold'>{t('Explore')}</span>
            <FaArrowCircleDown className='size-4' />
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={'contact'}
            className='z-[75] h-12 px-6 rounded-xl inline-flex items-center gap-2 border dark:bg-dark-primary hover:dark:bg-dark-primary/80 text-light-text hover:text-light-text/80 cursor-pointer'>
            <span>🙋‍♂️</span>
            <span className='font-semibold'>{t('Connect')}</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroMain