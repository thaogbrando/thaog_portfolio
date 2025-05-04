'use client';

import React from 'react'
import { type IntergrationsType } from './Skills'
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';

function Integrations(props: { integrations: IntergrationsType; className?: string }) {
    const { integrations, className } = props
    const t = useTranslations('Integrations')

    return (
        <motion.div
            animate={{
                y: '-50%'
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
            }}
            className={twMerge("flex flex-col gap-4 mx-auto pb-4", className)}
            >
            {Array.from({ length: 2 }).map((_, idx) => (
                <React.Fragment key={idx}>
                    {integrations.map(int => (
                        <div key={int.name} className='bg-blue-secondary/20 dark:bg-dark-text/5 border-light-background/10 rounded-3xl p-6'>
                            <div className='flex justify-center'>
                                <Icon className='size-24' icon={int.icon} />
                            </div>
                            <h3 className='text-3xl text-center text-blue-primary dark:text-light-accent font-semibold mt-6'>{int.name}</h3>
                            <p className='text-center dark:text-light-accent text-blue-primary mt-2'>{t(`${int.name}`)}
                            </p>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </motion.div>
    )
}

export default Integrations