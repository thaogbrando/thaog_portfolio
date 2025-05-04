
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
        desc: 'Manage your music and server with Rimuru dashboard from anywhere with Discord optimization!',
        hasRepo: false,
        freelance: false,
        link: 'https://example.com',
        technologies: ['nextjs', 'react', 'tailwind', 'mongodb', 'typescript', 'clerk', 'framermotion', 'shadcn']
    },
    {
        year: '2022',
        title: 'RimuruMusicBot',
        repo: '',
        desc: 'Manage your music and server with Rimuru dashboard from anywhere with Discord optimization!',
        hasRepo: false,
        freelance: true,
    
        link: 'https://example.com',
        technologies: ['mongodb', 'nodejs', 'discordjs', 'javascript']
    }
]
