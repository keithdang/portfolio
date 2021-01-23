import * as Module from '../interfaces';
export const oracle: Module.WorkCardProps = {
    company: 'Oracle',
    role: 'Software Developer',
    description: [
        'Dev for Netsuite\'s Subscription Management & Order To Cash',
        'First Junior Developer to lead a project in Waterloo company branch. Devised & implemented proration feature in subscription',
        'Lead team & won Netsuite Oracle Waterloo Hackathon(2019). Created external UI that analyzes queries in real time of Netsuite application to assess metrics such as longest & most repeated sqls. I created the query deconstructor and analyzer',
        'Created SPA for pricing module',
        'Java, Kotlin, SQL, Javascript'
    ],
    start: new Date(2018, 10),
    end: new Date(),
    location: 'Waterloo, ON'
}

export const work: Module.WorkCardProps[] = [oracle, oracle];