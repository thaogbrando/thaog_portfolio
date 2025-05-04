'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarLinks = ({ href, handleClick, offSet }: {
  href: string,
  handleClick?: () => void;
  offSet: number
}) => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  
  // Check if current path matches the link
  const isActive = () => {
    if (href === '/') {
      return pathname === '/';
    }
    
    // For regular paths (not anchors)
    if (!href.includes('#')) {
      return pathname === href || pathname.startsWith(`${href}/`);
    }
    
    // For anchor links, check if we're on the main page and the anchor is active
    if (href.includes('#')) {
      const [basePath] = href.split('#');
      return pathname === basePath || pathname === '/';
    }
    
    return false;
  };

  const getTranslationKey = (href: string): string => {
    const mapping: Record<string, string> = {
      '/': 'Home',
      '/about': 'AboutMe',
      '/skills': 'HonedSkills',
      '/projects': 'Projects',
    };
    return mapping[href] || 'More';
  };

  return (
    <Link
      scroll
      onClick={handleClick}
      className={`px-4 py-2 mt-2 text-base tracking-wide font-semibold rounded-lg md:mt-0 md:ml-2 transition-colors duration-200 ${
        isActive() 
          ? 'bg-blue-primary/30 dark:bg-light-accent/30 text-light-text dark:text-dark-text' 
          : 'text-light-text dark:text-dark-text text-shadow hover:bg-light-text/10'
      }`}
      href={href} 
    >
      {t(`${getTranslationKey(href)}`)}
    </Link>
  );
};

export default NavbarLinks;