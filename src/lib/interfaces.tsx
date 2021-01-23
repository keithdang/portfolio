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
    info: string
    placement: string
    date: Date
    location: string
    media?: JSX.Element | string
}