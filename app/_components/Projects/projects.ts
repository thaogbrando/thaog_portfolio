
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
        freelance: false,
        link: 'https://example.com',
        technologies: ['nextjs', 'tailwind', 'mongodb', 'typescript', 'clerk', 'shadcn']
    },
    {
        year: '2022',
        title: 'RimuruMusicBot',
        repo: '',
        desc: 'Rimuru, the best music, anime Discord bot! Invite now for free!',
        hasRepo: false,
        freelance: true,
    
        link: 'https://example.com',
        technologies: ['mongodb', 'nodejs', 'discordjs', 'javascript']
    }
]
