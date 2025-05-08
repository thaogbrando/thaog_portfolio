'use client';

import { Link } from "react-scroll";
import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";

const ScrollUp = () => {

    const t = useTranslations('Contact')
    
    return (
        <div className='flex flex-row items-center justify-center mx-auto'>
            <Link
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                to={'about'}
            >
                <div className='flex flex-row items-center justify-center group'>

                    <svg
                        className="mt-3 text-light-text dark:text-dark-text"
                        viewBox="0 0 100 160"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            width: '40px',
                            height: 'auto'
                        }}
                    >
                        <rect
                            x="32"
                            y="30"
                            width="36"
                            height="70"
                            rx="18"
                            ry="20"
                            stroke="#444"
                            strokeWidth="1.5"
                        />
                        <rect
                            x="32"
                            y="30"
                            width="36"
                            height="70"
                            rx="18"
                            ry="20"
                            fill="url(#mouseGradient)"
                            opacity={0.4}
                        />

                        <defs>
                            <linearGradient id="mouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
                                <stop offset="100%" style={{ stopColor: '#cccccc', stopOpacity: 0.2 }} />
                            </linearGradient>

                            <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" style={{ stopColor: '#4a90e2', stopOpacity: 0.7 }} />
                                <stop offset="100%" style={{ stopColor: '#4a90e2', stopOpacity: 0 }} />
                            </radialGradient>
                        </defs>

                        <line
                            x1="50"
                            y1="30"
                            x2="50"
                            y2="50"
                            stroke="#555"
                            strokeWidth="0.5"
                            opacity={0.3}
                        />

                        <rect
                            x="44"
                            y="50"
                            width="12"
                            height="16"
                            rx="6"
                            ry="6"
                            fill="#d0d0d0"
                            stroke="#666"
                            strokeWidth="0.8"
                        >
                            <animate
                                attributeName="y"
                                values="50;35;50"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </rect>

                        <line
                            x1="46"
                            y1="58"
                            x2="54"
                            y2="58"
                            stroke="#000000"
                            strokeWidth="0.9"
                        >
                            <animate
                                attributeName="y1"
                                values="58;43;58"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="y2"
                                values="58;43;58"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </line>

                        <circle
                            cx="50"
                            cy="55"
                            r="10"
                            fill="url(#pulseGradient)"
                        >
                            <animate
                                attributeName="r"
                                values="10;14;10"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="opacity"
                                values="0.6;0.3;0.6"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="cy"
                                values="55;40;55"
                                dur="1.5s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                    <div className="flex items-center justify-center gap-1 text-light-text dark:text-dark-text group-hover:italic">
                        <p className='text-sm'>{t('Scroll_Up')}</p>
                        <span><Icon className="w-5 h-5" icon={'uil:arrow-up'} /></span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ScrollUp
