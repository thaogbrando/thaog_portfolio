'use client';

import React, { useEffect, useRef, useState } from 'react'
import { type IntergrationsType } from './Skills'
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl';

function ScrollingIntegrations(props: { integrations: IntergrationsType; className?: string, reverse?: boolean }) {
    const { integrations, className, reverse } = props

    const t = useTranslations('Integrations');
  
    const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  
  const progress = useMotionValue(0);
  
  const y = useTransform(
    progress, 
    [0, 100], 
    reverse ? ['-50%', '0%'] : ['0%', '-50%']
  );

  useEffect(() => {
    if (isPaused) return;
    
    const startTime = Date.now();
    const duration = 15000; // 15 seconds
    const startValue = progress.get();
    
    const animate = () => {
      if (isPaused) return;
      
      const elapsed = Date.now() - startTime;
      const newProgress = startValue + ((elapsed / duration) * 100) % 100;
      progress.set(newProgress);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    const animationRef = { current: requestAnimationFrame(animate) };
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={containerRef}
        style={{ y }}
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
                <p className='text-center dark:text-light-accent text-blue-primary mt-2'>{t(`${int.name}`)}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingIntegrations;
