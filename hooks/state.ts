import { useState } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen,
    toggleMenu: () => setIsOpen(!isOpen),
  };
};