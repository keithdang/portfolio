export interface ProjectCardProps {
    title: string
    description: string[]
    stack: string[]
    start: Date
    end: Date
    github: string | ''
    evidence?: JSX.Element | string
    members: number
}

export interface DanceCardProps {
    event: string
    format: string
    info?: string
    placement?: string
    date: Date
    location: string
    media?: JSX.Element | string
}

export interface TestimonialProps {
    name: string
    desc: string
}

export interface WorkCardProps {
    company: string
    role: string
    description: string[]
    start: Date
    end: Date
    location: string
    media?: JSX.Element | string
}

export interface CurricularProps {
    club: string
    role: string
    description: string[]
    start: Date
    end: Date
    media?: JSX.Element | string
}

export interface SkillProps {
    category: string
    list: string[]
}

