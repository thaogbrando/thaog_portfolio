'use client';

import useHobbiesAnimation from '@/app/_components/hobbies/hobbiesAnimations'
import { motion } from 'framer-motion'
import { Icon } from "@iconify/react/dist/iconify.js";
import HobbyMain from "@/app/_components/hobbies/hobbiesMain";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Me from '@/public/Me.png'
import Bounded from '../Extras/Bounded';

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const AboutMeText = () => {

    const { state, handleHobbiesClick } = useHobbiesAnimation();
    const { toast } = useToast();
    const t = useTranslations('About');

    const handleClick = async () => {
        if (state.hobbiesVisible) {
            handleHobbiesClick();
            return;
        }
        toast({
            title: "Hobbies copied to clipboard.",
        });
        await handleHobbiesClick();
        await wait(1000)
        toast({
            title: "Hobbies pasted!",
        });
    };

    return (

        <Bounded
        >
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] max-w-[1200px]">
                <div className="col-start-1">
                    <h3 className="text-7xl md:text-8xl text-light-text dark:text-dark-text mb-2 font-bold py-6 text-left"><span className='text-blue-primary dark:text-light-accent'>{t('The_Man')}</span> {t('Behind_Code')}</h3>
                </div>

                <div className="prose prose-lg col-start-1 text-light-text dark:text-dark-text">
                    {t('About_Body1')} <br /> <br />
                    {t('About_Body2')}
                </div>
                

                <Image
                    alt='my in my handsome self'
                    src={Me}
                    className="row-start-1 max-w-[360px] md:max-w-sm md:col-start-2 md:row-end-3 -rotate-2 hover:rotate-0 transition-all ease-in-out duration-500 aspect-square overflow-hidden rounded-3xl border-2 border-dark-secondary hover:grayscale mx-auto md:mx-0"
                />
            </div>
            <button
                    onClick={handleClick}
                    className="border border-light-text dark:border-dark-text text-blue-primary dark:text-light-accent font-medium mb-4 rounded-lg px-4 text-lg flex gap-2 items-center mt-4 py-2 hover:scale-105 transition-all duration-500 cursor-pointer md:self-start sm:self-center"
                >
                    <span className="cursor-pointer gap-2 font-semibold flex items-center justify-center text-sm">
                        <p>{state.hobbiesVisible ? `${t('Close_Hobbies')}` : `${t('See_Hobbies')}`}</p>
                        <Icon className="size-6" icon={'tabler:click'} />
                    </span>
                </button>
            <div>
                {state.buttonsVisible && (
                    <div className="flex items-center mx-auto justify-center">
                        <div>
                            <div>
                                <div className='flex gap-4 mt-6 items-center justify-center'>
                                    <button
                                        className={`w-20 h-20 rounded-lg text-center text-light-background dark:text-dark-background transition-colors duration-300 ${state.buttonsActive ? 'bg-dark-background/80 dark:dark:bg-light-background/80' : 'bg-dark-background dark:dark:bg-light-background'}`}
                                    >
                                        Ctrl
                                    </button>
                                    <Icon className="size-6" icon={'line-md:plus'} />
                                    <button
                                        className={`w-20 h-20 rounded-lg text-center text-light-background dark:text-dark-background transition-colors duration-300 ${state.buttonsActive ? 'bg-dark-background/80 dark:dark:bg-light-background/80' : 'bg-dark-background dark:dark:bg-light-background'}`}
                                    >
                                        {state.changeLetter}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="mx-auto max-w-3xl">
                    {state.hobbiesVisible && (
                        <HobbyMain />
                    )}
                </div>
            </div>
        </Bounded>
    );
};

export default AboutMeText;
