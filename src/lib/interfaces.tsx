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