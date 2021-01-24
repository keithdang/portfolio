interface BaseProps {
    title: string
    description: string[]
    start: Date
    end: Date
    evidence?: JSX.Element | string
    members?: number
}

export interface ProjectCardProps extends BaseProps{
    stack?: string[]
    github?: string | ''
}

export interface SchoolProjectProps extends BaseProps {
    course: string
    contribution: string
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

