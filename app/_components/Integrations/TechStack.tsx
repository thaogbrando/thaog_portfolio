'use client';

import React from 'react'
import SkillCard from './SkillCard';
import { useTranslations } from 'next-intl';

const techTypes = [
    {
        title: 'Frontend',
        icon_type: 'dashicons:welcome-widgets-menus',
        tech: ['vscode-icons:file-type-reactjs', 'logos:nextjs-icon', "logos:tailwindcss-icon",],
    },
    {
        title: 'Backend',
        icon_type: 'material-symbols-light:data-table-rounded',
        tech: ['logos:typescript-icon', 'logos:javascript', 'logos:nodejs-icon'],
    },
    {
        title: 'Database',
        icon_type: 'tabler:database',
        tech: ['logos:mongodb-icon']
    },
    {
        title: 'UI/UX',
        icon_type: 'fluent:paint-brush-12-filled',
        tech: ['simple-icons:shadcnui', 'logos:figma', 'ph:framer-logo-duotone']
    }
]

const TechStack = () => {
    const t = useTranslations('Integrations');

    return (
        <div className='w-full mt-14 flex flex-col gap-4'>
            <div className='w-full md:text-left text-center flex  border-[0.01px] border-dark-secondary rounded-xl'>
                <h4 className='text-light-text dark:text-dark-text font-semibold text-xl p-4'>{t('All_Skills')}</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 flex-1 gap-4'>
                {techTypes.map((stack, idx) => (
                    <React.Fragment
                        key={idx}>
                        <SkillCard
                            icon={stack.icon_type}
                            tech={stack.tech}
                            title={stack.title} />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default TechStack