'use client';

import { projectList } from '@/app/_components/Projects/projects'
import { motion } from "framer-motion";
import { fadeIn } from "@/motion";
import { useTranslations } from 'next-intl';
import TiltProjectCard from './TiltProjectCard';
import AnimatedString from '@/app/_components/Extras/AnimatedText';

interface Project {
  title: string;
  repo: string;
  hasRepo: boolean;
  link: string;
  freelance: boolean;
  year: string;
  desc: string;
  technologies: string[];
}

const ProjectsMain = () => {

  const t = useTranslations('Projects');

  return (
    <motion.section
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id='projects'
      className='py-40 min-h-screen max-w-[1200px] px-4 lg:px-0 mx-auto'
    >
      <div className='w-full flex flex-col items-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-7xl md:text-8xl font-bold text-center text-light-text dark:text-dark-text'
        >
          <span className='text-blue-primary dark:text-light-accent'>{t('My_Best')}</span> {t('Project')}
        </motion.h2>


        <AnimatedString
          text={t('Project_Desc')}
          delay={0.2}
          className='text-center prose prose-lg text-light-text dark:text-dark-text text-lg mt-6 max-w-md lg:max-w-xl mx-auto md:mx-0'
        />


        <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 mx-4 gap-10 place-items-center'>
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn('left', 0.1 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <TiltProjectCard
                hasRepo={project.hasRepo}
                freelance={project.freelance}
                title={project.title}
                year={project.year}
                tech={project.technologies}
                link={project.link}
                repo={project.repo}
                desc={t(`${project.title}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsMain
