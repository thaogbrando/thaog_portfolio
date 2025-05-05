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

  // Split text into words first
  const words = text.split(" ");

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

  // Keep track of the overall letter index across all words
  let letterCounter = 0;

  return (
    <div className={className} key={animationKey}>
      {words.map((word, wordIndex) => {
        // Create an array of letters for each word
        const letters = word.split("");
        
        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap mr-1">
            {letters.map((letter, letterIndex) => {
              const currentLetterIndex = letterCounter;
              letterCounter++;
              
              return (
                <motion.span
                  key={`letter-${wordIndex}-${letterIndex}`}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={currentLetterIndex}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedString;
