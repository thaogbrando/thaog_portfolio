'use client'
import { HiMenuAlt3 } from "react-icons/hi";
import React, { useEffect, useState } from 'react'
import { MdOutlineLanguage } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import NavbarLinks from "./NavbarLinks";
import { useTheme } from "next-themes";
import { useLanguage } from '@/hooks/languageSwitch';
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = {
    name: string,
    href: string
}

const Header = () => {
    const [useNav, setuseNav] = React.useState(false)
    const [useMobileNav, setuseMobileNav] = React.useState(false)
    const { language, toggleLanguage } = useLanguage();
    const [isMounted, setMouted] = useState(false);
    const t = useTranslations("Nav");

    const setNav = () => {
        setuseNav(!useNav)
    }

    const setMobileNav = () => {
        setuseNav(false)
        setuseMobileNav(!useMobileNav)
    };

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about' },
        { name: 'Honed Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },

    ];

    const { setTheme } = useTheme();


    useEffect(() => {
        setMouted(true)
    }, [])

    if (!isMounted) return null;
    const mobile = -160

    const isDarkMode = window.localStorage.getItem('theme') === 'dark' ? true : false
    const changeLanguage = () => {
        toggleLanguage()
        window.location.reload()
    }



    return (
        <header className={`md:px-4 xl:px-0 sticky top-0 md:top-2 z-[99] `}>
            <div className="  dark:bg-dark-secondary bg-blue-secondary w-full md:max-w-[1200px] mx-auto backdrop-blur-3xl md:rounded-full pt-3 py-2 drop-shadow-md">
                <div className="antialiased  mx-auto">
                    <div className="w-full text-gray-700 ">
                        <div className="flex flex-col mx-auto md:items-center md:justify-between md:flex-row px-6">
                            <div className="flex flex-row items-center justify-between">
                                <a href="/" className="text-xl font-semibold hover:text-black/65 transition-all duration-200 tracking-widest text-black og-shadow rounded-lg z-40">ThaOgBrando</a>
                                <button className="rounded-lg md:hidden bg-dark-background z-40 focus:outline-none focus:shadow-outline" onClick={setMobileNav}>
                                    < HiMenuAlt3 className="w-6 h-6 text-light-background/80" />
                                </button>
                            </div>
                            <nav className={`${useNav || useMobileNav ? 'flex' : 'hidden'} z-40 flex-col flex-grow md:flex md:justify-end md:flex-row`} >
                                {navLinks.map((nav, idx) => (
                                    <NavbarLinks
                                        offSet={mobile}
                                        handleClick={setMobileNav}
                                        key={idx} href={nav.href} />
                                ))}
                                <div className="relative">
                                    <button
                                        onClick={setNav}
                                        className="hover:bg-light-text/10 md:ml-2 text-shadow bg-transparent rounded-lg md:mt-0 hover:bg-white/60 focus:outline-none focus:shadow-outline group flex items-center gap-2 px-4 py-2 mt-2 text-base tracking-wide font-semibold w-full md:w-auto"
                                    >
                                        <span>{t('More')}</span>
                                        <Icon
                                            icon={'bxs:up-arrow'}
                                            className={`${useNav ? 'rotate-180' : ''} transition-all ease-in-out duration-300 text-xs`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className={`${useNav ? 'block' : 'hidden'} z-[99] absolute right-0 w-full md:max-w-[450px] md:w-screen mt-6 text text-light-text dark:text-dark-text dark:bg-dark-secondary bg-blue-secondary rounded-md origin-top-right `}>
                                            <div className="px-2 pt-2 pb-2 bg-gradient-to-t from-cyan-500/40 to-white/40 backdrop-blur-xl rounded-md shadow-lg">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <button onClick={changeLanguage} className="dark:hover:bg-light-text/30 hover:bg-light-text/10 flex flex-row items-start rounded-lg bg-transparent p-2 text-black focus:text-gray-900 hover:bg-black/15 focus:outline-none focus:shadow-outline">
                                                        <div className="flex items-center justify-center">
                                                            <div className="bg-teal-500 text-white rounded-lg p-3">
                                                                <MdOutlineLanguage className="size-10" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="font-semibold">{t('Language')}</p>
                                                                <p className="text-sm font-medium">{language === 'en' ? "English" : 'Español'}</p>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    <button
                                                        onClick={() => setTheme(isDarkMode ? "light" : 'dark')}
                                                        className="dark:hover:bg-light-text/30 hover:bg-light-text/10 flex flex-row items-start rounded-lg bg-transparent p-2 text-black focus:text-gray-900 hover:bg-black/15 focus:outline-none focus:shadow-outline">
                                                        <div className="flex items-center justify-center">
                                                            <div className="bg-teal-500 rounded-lg p-3">
                                                                <FaSun className="size-10" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="font-semibold">{t('Screen_Mode')}</p>
                                                                <p className="text-sm font-medium ">{isDarkMode ? t('Dark_Mode') : t('Light_Mode')}</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header