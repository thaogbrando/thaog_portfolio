'use client';

import React from 'react'
import { integrations, intergrations2 } from './Skills';
import Integrations from './Integrations';
import { useTranslations } from 'next-intl';
import Tech from './Tech';
import { motion } from "framer-motion";
import { fadeIn } from "@/motion";

const AboutMain = () => {
  const t = useTranslations('Integrations')

  return (
    <motion.section
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id='skills'
      className=' overflow-hidden px-4 lg:px-0 py-16 md:py-40 mx-auto'>
      <div className='px-4 max-w-[1200px] mx-auto'>
        <div
          className='grid lg:grid-cols-2 items-center lg:gap-16'>
          <div className=''>
            <div className=' border border-light-text dark:border-dark-text px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
              <div className='bg-blue-primary dark:bg-light-accent size-2.5 rounded-full relative'>
                <div className='bg-blue-primary dark:bg-light-accent absolute inset-0 rounded-full dot-pulse'></div>
              </div>
              <p className='text-sm font-medium text-light-text dark:text-dark-text'>{t('Skills')}</p>
            </div>
            <h2 className='text-6xl md:text-8xl font-bold mt-6 text-light-text dark:text-dark-text'>{t('Push')} <span className='text-blue-primary dark:text-light-accent'>{t('Horizons')}</span></h2>
            <p className='text-light-text dark:text-dark-text mt-4 text-lg'>{t('Hobby_Coder')}</p>
          </div>
          <div>
            <div className='h-[400px] lg:h-[500px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
              <Integrations integrations={integrations} />
              <Integrations integrations={intergrations2} className='hidden md:flex' />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutMain
