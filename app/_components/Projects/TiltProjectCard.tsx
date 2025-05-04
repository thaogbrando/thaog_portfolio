'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRef, useEffect, MouseEvent as ReactMouseEvent, useState } from 'react';
import MyLogo from '@/public/oglogo.png'
import Button from '../Buttons/FillButton';
import TechBadges from './Badge';

interface TiltState {
    x: number;
    y: number;
}

interface TildCardProps {
    title: string;
    year: string;
    desc: string,
    hasRepo: boolean;
    freelance: boolean;
    link: string;
    repo: string
    tech: Array<string>
}

const TiltProjectCard = ({ title, year, hasRepo, freelance, link, repo, desc, tech }: TildCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
    const { theme } = useTheme();

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (y - centerY) / 10;
            const tiltY = -(centerX - x) / 10;
            setTilt({ x: tiltX, y: tiltY });
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const isDarkMode = theme === 'dark' ? true : false
    const lightModeShadow = '0 0 30px #9ad4df';
    const darkModeShadow = '0 0 30px #363f68';
    const t = useTranslations('Projects')

    function addSpacesBeforeCapitals(str: string) {

        return str.replace(/([A-Z])/g, ' $1').trim();
    }

    return (
        <div ref={cardRef} className='relative cursor-pointer w-[330px] md:w-96 h-[460px] md:h-[435px] bg-dark-primary/20 dark:bg-dark-accent/20 backdrop-blur-xl overflow-hidden rounded-3xl shadow-2xl'
  style={{
    transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    boxShadow: isHovered ? (!isDarkMode ? lightModeShadow : darkModeShadow) : ''
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false)
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 z-10" />
  
  {/* Main content container with consistent padding */}
  <div className="absolute inset-0 p-6 flex flex-col z-20 text-light-text dark:text-dark-text">
    {/* Header section */}
    <div className="flex justify-between items-start">
      <h3 className="text-4xl font-black mr-2 text-wrap w-fit text-white mb-2 text-dark-secondary dark:text-dark-primary">{addSpacesBeforeCapitals(title)}</h3>
      <span className='flex items-center justify-center'><Image src={MyLogo} alt='my logo' width={40} height={40} quality={100} /></span>
    </div>
    
    {/* Description section */}
    <div className='flex flex-col justify-center gap-1 text-sm my-2'>
      <div className='flex justify-start items-center gap-2 text-light-accent'>
        <h3 className="font-bold text-white">{year}</h3>
        <span>•</span>
        <span className="font-bold text-white rounded-full">
          {freelance ? (t('Freelance')) : (t('Client'))}
        </span>
      </div>
      <p className='text-sm font-semibold tracking-wide text-light-text/90 dark:text-dark-text/90'>{desc}</p>
    </div>
    
    {/* Tech badges section - positioned above buttons */}
    <div className="mt-auto mb-4">
      <TechBadges technologies={tech} />
    </div>
    
    {/* Button section - now in flex-row with consistent positioning */}
    <div className="flex flex-row gap-2 mt-auto">
      <Button
        href={link}
        label={t('View_Live')}
        icon='pepicons-print:arrow-up-right'
        showIcon
        className='text-sm rounded-full'
      />
      {hasRepo && (
        <Button
          href={repo}
          label={t('Code')}
          icon='mdi:git'
          showIcon
          className='text-sm rounded-full'
        />
      )}
    </div>
  </div>
  
  {isHovered && (
    <div className="absolute inset-0 bg-gradient-to-t from-blue-primary/20 to-dark-background/20 opacity-60 z-0" />
  )}
</div>
    )
}

export default TiltProjectCard
