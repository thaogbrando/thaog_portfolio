"use client";
import { useEffect, useRef } from "react";
import { Shapes } from "@/app/_components/Hero/Hero3D/Shapes";
import Bounded from '@/app/_components/Extras/Bounded'
import gsap from "gsap";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
import Button from "../../Buttons/FillButton";
import MagicButton from "../../Buttons/MagicButton";

const Hero = () => {
  const component = useRef(null);
  const t = useTranslations('Landing');
  const router = useRouter()

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));
  };

  return (
    <Bounded
      className="max-w-[1200px] mx-auto py-8 md:pt-20 lg:pt-32 md:pb-10 place-justify-center px-4 xl:px-0"
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 items-center md:grid-cols-2">
        <Shapes />
        <div className="col-start-1 md:row-start-1" data-speed=".2">
          <h1
            className="mb-8 text-7xl lg:text-[clamp(3rem,12vmin,20rem)] font-black leading-none tracking-tighter"
            aria-label={
              'ThaOgBrando'
            }
          >
            <span className="block dark:text-dark-secondary text-blue-secondary">
              {renderLetters('Tha', "first")}
            </span>
            <span className="-mt-[.2em] block text-light-text dark:text-dark-text">
              {renderLetters('OgBrando', "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-r from-dark-secondary via-dark-accent to-light-secondary bg-clip-text text-lg font-bold uppercase tracking-[.15em] text-transparent opacity-0 md:text-3xl lg:text-4xl">
            {t('Just_A_Guy')}
          </span>
          <motion.div
            className='flex flex-col md:flex-row justify-start items-start mt-8 gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <MagicButton handleClick={() => router.push('/#contact', {scroll: true})} title={t('Connect')} icon={'🙋‍♂️'} position="left" otherClasses="text-dark-text hover:text-dark-text/80" />
            <Button href="/projects" label={t('Explore')} className="z-[75] inline-flex items-center w-full md:w-auto text-sm gap-2 px-4 h-12 rounded-xl cursor-pointer" icon="pepicons-print:arrow-up-right" />
          </motion.div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
