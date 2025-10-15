'use client';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const techIcons: Record<string, string> = {
  // JavaScript ecosystem
  react: "vscode-icons:file-type-reactjs",
  nextjs: "logos:nextjs-icon",
  vue: "logos:vue",
  angular: "logos:angular-icon",
  svelte: "logos:svelte-icon",
  typescript: "logos:typescript-icon",
  javascript: "logos:javascript",
  // CSS and UI
  tailwind: "logos:tailwindcss-icon",
  sass: "logos:sass",
  bootstrap: "logos:bootstrap",
  materialui: "logos:material-ui",
  // Backend
  nodejs: "logos:nodejs-icon",
  express: "simple-icons:express",
  nestjs: "logos:nestjs",
  django: "logos:django-icon",
  flask: "logos:flask",
  ruby: "logos:ruby",
  rails: "logos:rails",
  php: "logos:php",
  laravel: "logos:laravel",
  dotnet: "logos:dotnet",
  zod: "logos:zod",
  stripe: "logos:stripe",

  // Database
  mongodb: "logos:mongodb-icon",
  mysql: "logos:mysql-icon",
  postgresql: "logos:postgresql",
  firebase: "logos:firebase",
  supabase: "logos:supabase-icon",
  // Cloud & DevOps
  aws: "logos:aws",
  gcp: "logos:google-cloud",
  azure: "logos:microsoft-azure",
  docker: "logos:docker-icon",
  kubernetes: "logos:kubernetes",
  vercel: "ri:vercel-line",
  netlify: "logos:netlify",
  // Mobile
  reactnative: "logos:react",
  flutter: "logos:flutter",
  swift: "logos:swift",
  kotlin: "logos:kotlin-icon",
  // Others
  discordjs: 'devicon:discordjs', 
  graphql: "logos:graphql",
  redux: "logos:redux",
  prisma: "logos:prisma",
  webpack: "logos:webpack",
  clerk: "simple-icons:clerk",
  framermotion: "devicon:framermotion",
  shadcn: "simple-icons:shadcnui",
  vite: "logos:vitejs",
  git: "logos:git-icon",
  github: "logos:github-icon",
  figma: "logos:figma",
  // Default fallback for when a tech isn't found
  default: "mdi:code-tags"
};

const techColors: Record<string, string> = {
  nextjs: "#000000",
  express: "#000000",
  react: "#61DAFB",
  vue: "#4FC08D",
  angular: "#DD0031",
  nodejs: "#539E43",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  tailwind: "#38B2AC",
  default: "#6366F1"
};

/**
 * @param hex 
 * @param percentage 
 * @returns 
 */
const darkenColor = (hex: string, percentage: number = 90): string => {
  
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const factor = 1 - (percentage / 100);
  
  const newR = Math.max(0, Math.floor(r * factor));
  const newG = Math.max(0, Math.floor(g * factor));
  const newB = Math.max(0, Math.floor(b * factor));
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

/**
 * @param hex
 * @param percentage 
 * @returns 
 */
const lightenColor = (hex: string, percentage: number = 20): string => {
  
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  const factor = percentage / 100;
 
  const newR = Math.min(255, Math.floor(r + (255 - r) * factor));
  const newG = Math.min(255, Math.floor(g + (255 - g) * factor));
  const newB = Math.min(255, Math.floor(b + (255 - b) * factor));
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge = ({ tech, index }: TechBadgeProps) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  const iconKey = tech.toLowerCase().replace(/\s+/g, '');
  const iconName = techIcons[iconKey] || techIcons.default;
  const baseColor = techColors[iconKey] || techColors.default;
  
  const darkModeColor = darkenColor(baseColor, 90);
  const darkModeHoverColor = lightenColor(darkModeColor, 20);

  const lightModeColor = "#F3F4F6"; 
  const lightModeHoverColor = "#E5E7EB"; 
  
  const bgColor = isDarkMode ? darkModeColor : lightModeColor;
  const hoverColor = isDarkMode ? darkModeHoverColor : lightModeHoverColor;
  const textColor = isDarkMode ? "#FFFFFF" : "#4B5563"; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
      className="inline-flex items-center rounded-full px-3 py-1 text-sm mr-2 mb-2"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      whileHover={{
        backgroundColor: hoverColor,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Icon icon={iconName} className="mr-1" width="18" height="16" />
      <span className="capitalize text-sm">{tech}</span>
    </motion.div>
  );
};

interface TechBadgesProps {
  technologies: string[];
  className?: string;
}

const TechBadges = ({ technologies, className = "" }: TechBadgesProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className={`flex flex-wrap ${className}`}>
      {technologies.map((tech, index) => (
        <TechBadge key={`${tech}-${index}`} tech={tech} index={index} />
      ))}
    </div>
  );
};


export default TechBadges;
