'use client';
import AboutMeText from '@/app/_components/About/AboutText';
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/motion";
import ScrollUp from '../Buttons/ScrollUp';

const AboutMain = () => {

    return (
        <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="about"
            className="flex flex-col w-full px-4 lg:px-0 py-10">
            <div
                className="container mx-auto w-full max-w-[1200px]"
            >
                <AboutMeText />
            </div>
            <ScrollUp />
        </motion.div>
    )
}

export default AboutMain