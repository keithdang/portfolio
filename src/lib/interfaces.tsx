interface BaseProps {
    title: string
    description: string[]
    start: Date
    end?: Date
    media: Photo | Video
    members?: number
    styling?: string
}

export interface ProjectCardProps extends BaseProps{
    stack?: string[]
    github?: string | ''
    adjustImage? : string
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
    media?: string
    styling?: string
}

export interface CurricularProps {
    club: string
    role: string
    description: string[]
    start: Date
    end: Date
    media: Photo
    styling?: string
}

export interface SkillProps {
    category: string
    list: string[]
}

export interface ButtonProps {
    name: string
    hoverEnter?: string
    hoverLeave?: string
    clickEnter?: string
}

export interface Video {
    link: string
}

export interface Photo {
    image: string
}

export interface HeaderProps {
    title?: string,
    image?: string,
    desc?: string
}

export interface MediaProps {
    media: Photo | Video
    text?: string
    styling?: string
}

export function isPhoto(med: Photo | Video): med is Photo {
    return 'image' in  med;
}