
type ProjectProps = {
    year: string,
    title: string,
    repo: string,
    desc: string;
    hasRepo: boolean,
    freelance: boolean,
    link: string,
    technologies: string[]
}

export const projectList: ProjectProps[] = [
    {
        year: '2024',
        title: 'RimuruDashboard',
        repo: '',
        desc: 'Use Rimuru dashboard to manage your bot from anywhere with latest technologies.',
        hasRepo: false,
        freelance: true,
        link: 'https://rimurubot.com',
        technologies: ['nextjs', "framermotion", 'mongodb', 'typescript', 'clerk', "react", "tailwind", 'shadcn']
    },
    {
        year: '2022',
        title: 'RimuruMusicBot',
        repo: '',
        desc: 'Rimuru, the best music, anime Discord bot! Play music from different platforms & Twitch steams. Invite now for free!',
        hasRepo: false,
        freelance: true,
    
        link: 'https://discord.com/users/944006750921687081',
        technologies: ['mongodb', 'nodejs', 'discordjs', 'javascript']
    }
]
