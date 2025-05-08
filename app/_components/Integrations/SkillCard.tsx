import React from 'react'
import { Icon } from '@iconify/react';

const SkillCard = ({ icon, title, tech }: { icon: string, title: string, tech: string[] }) => {
    return (
        <div
            className='flex flex-col gap-4 items-center justify-center p-6 h-80 cursor-pointer bg-blue-secondary/20 dark:bg-dark-text/5 rounded-lg hover:border-[0.1px] shadow-lg hover:border-blue-primary hover:dark:border-light-accent'
        >
            <Tooltip content={title} />
            <div className='flex items-center flex-col gap-2 my-4 justify-center text-blue-primary dark:text-light-accent font-semibold'>
                <Icon icon={icon} className='w-14 h-14' />
                <p className='text-xl underline underline-offset-2'>{title}</p>
            </div>
            <div className='flex flex-wrap gap-4'>
                {tech.map((icn, idx) => (
                    <Icon className='w-14 h-14' icon={icn} key={idx} />
                ))}
            </div>

        </div>
    )
}

export default SkillCard
