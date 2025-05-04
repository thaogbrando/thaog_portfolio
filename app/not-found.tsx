
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';


const NotFound = async () => {
    const t = await getTranslations('404')
    return (
        <div className="flex flex-col items-center justify-center h-screen text-light-text dark:text-dark-text">
            <div className='w-auto flex items-center flex-col h-auto px-20 py-20 bg-light-secondary dark:bg-dark-primary rounded-md border border-dark-secondary'>
                <div className="bg-gradient-to-r from-dark-secondary to-dark-accent dark:bg-gradient-to-r dark:from-blue-accent dark:to-light-secondary w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <p className='text-4xl font-bold text-black'>404</p>
                </div>
                <p className="text-base text-white font-bold mb-8 w-44 text-center">
                    {t('Knock_Knock')} <br /> {t('Not_This_Page')}
                </p>
                <Link className='flex items-center justify-center px-6 py-4 mt-2 text-black bg-dark-secondary dark:bg-blue-secondary hover:bg-dark-secondary/80 hover:dark:bg-blue-secondary/80 font-medium text-lg rounded-md dark:text-light-text text-dark-text' href="/">
                    {t('Return')}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;