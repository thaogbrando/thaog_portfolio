'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import MagicButton from '../Buttons/MagicButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const ContactMain = () => {

    const t = useTranslations('Contact')

    const sectionVariants = {
        hidden: { 
            opacity: 0 
        },
        visible: { 
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20 
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    return (
        <motion.section
            id='contact'
            className='py-32 pb-4 overflow-hidden px-4 lg:px-0 mx-auto rounded-lg text-light-text dark:text-dark-text'
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
        >
            <motion.h2 
                className='text-6xl font-medium text-center mb-6'
                variants={itemVariants}
            >
                {t('Contact_Me')}<span className='text-blue-primary dark:text-light-accent'> {t('Today')}</span>
            </motion.h2>
            
            <motion.div 
                className='max-w-[1200px] mx-auto bg-dark-secondary dark:bg-dark-primary rounded-lg'
                variants={itemVariants}
            >
                <div className='grid md:grid-cols-2 p-4 gap-2 text-dark-text dark:text-light-text'>
                    <motion.h3 
                        className='text-4xl lg:text-5xl font-medium'
                        variants={itemVariants}
                    >
                        {t('Ready_Make')} <span className='text-blue-primary dark:text-light-accent'>{t('Your')}</span> {t('Dreams_Reality')}
                    </motion.h3>
                    
                    <motion.div 
                        className='md:max-w-md pt-1'
                        variants={itemVariants}
                    >
                        <motion.p 
                            className='pb-4 md:pb-2 max-w-md'
                            variants={itemVariants}
                        >
                            {t('Reach_Out')}
                        </motion.p>
                        
                        <motion.div variants={itemVariants}>
                            <Link target='_blank' href={'https://linkedin.com/in/brandon-u-325706361'}>
                                <MagicButton
                                    otherClasses='text-light-background hover:text-light-background/80'
                                    title={t('Message')}
                                    icon={<Icon icon={'tabler:send'} />}
                                    position='right'
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default ContactMain;