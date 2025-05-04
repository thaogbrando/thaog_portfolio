'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

interface AnimatedStringProps {
  text: string;
  delay: number;
  className?: string;
}

const AnimatedString = ({ text, className = "", delay = 0 }: AnimatedStringProps) => {
  // Use randomId in state to force re-mount on page reload
  const [animationKey, setAnimationKey] = useState(Date.now().toString());
  
  // Reset animation key when component mounts
  useEffect(() => {
    setAnimationKey(Date.now().toString());
  }, []);

  // Split text into individual letters for animation
  const letters = text.split("");

  // Set up letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * 0.03),
        duration: 0.25,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className={className} key={animationKey}>
      {letters.map((letter, index) => (
        <motion.span
          key={`letter-${index}`}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedString;