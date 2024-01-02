import { Involvement } from './Involvement';

export const Involvements = [
    new Involvement({
        id: 1,
        name: 'Special Olympics',
        description: 'I have been a part of Special Olympics at the U of U for 3 years now. I have been the president of the organization for the last 2 years. As an organization, we work with the Special Olympics Utah office to coordinate and plan the state games competitions in the fall and spring. As president, I lead a small team and coordinate with the state office to make sure the games are fully planned and run smoothly on the day of the event. It is extremely rewarding to be a part of this organization and help those who were born with intellectual and developmental disabilities as they navigate through their lives.',
        images: ['specops.jpeg'],
    }),
    new Involvement({
        id: 2,
        name: 'Running',
        description: 'I started running in fall of 2020 and have fell in love with it ever since. It all started when my friend bet me I couldnt run a marathon. I took him up on it, and 3 months later I had completed my first marathon. Since then I have qualified for and run in the Boston Marathon with a time of 2:55:16 (6:39/mi), won the 2022 Salt Flats Ultramarathon (56 miles), and completed a 100 mile run in under 24 hours. In all I have completed over 10 races of marathon distance or longer. I plan to continue and get more competitive in races. Setting and following a running plan requires hard work and discipline. Additionally, I have learned how to set goals and work in small increments each day to achieve those goals, with specific milestones along the way. Running is a great example of my work ethic, dedication, and commitment.',
        reason: 'personal',
        images: ['running.jpeg'],
    })
]