'use client'
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLang = document.cookie.match(/locale=([^;]*)/)?.[1];
      return storedLang || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // expire in 1 year
      
      document.cookie = `locale=${language};expires=${date.toUTCString()};path=/`;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return { language, toggleLanguage };
};