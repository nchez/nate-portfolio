import { ProjectStack } from "./ProjectStack";
import { RxOpenInNewWindow } from 'react-icons/rx';

const Project = ({projectData}) => {
    const data = projectData;
    return (
        <div className="project-tile">
            <h2>{data?.title || 'Project Title'}</h2>
            <div className="top-half-tile">
                <div className="project-media">
                    {/* <img /> */}
                </div>
                <div className="project-details">
                    <div className="project-links">
                        <a className="link-div" href={data?.deployLink}>
                            <span>
                                Link
                            </span>
                            <RxOpenInNewWindow />
                        </a>
                        <a className="link-div" href={data?.gitLink}>
                            <span>
                                GitHub
                            </span>
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                    <ProjectStack stack={data?.stack || ['JS', 'EJS', 'Express', 'Node', 'pSQL']} />
                </div>
            </div>
            <p>{data?.desc || 'Browser game developed with JavaScript, HTML, and CSS with significant use of the Canvas API. User collects falling beanies to increase their score while avoiding the falling visors by moving the character horizontally.'}</p>
        </div>
    )
};

const projects = [
    {
        title: 'Beanie Bandit',
        desc: 'Browser game developed with JavaScript, HTML, and CSS with significant use of the Canvas API. User collects falling beanies to increase their score while avoiding the falling visors by moving the character horizontally.',
        stack: ['javascript', 'html', 'css'],
        gitLink: 'https://github.com/nchez/Beanie-Bandit',
        deployLink: 'https://beanie-bandit.herokuapp.com/'
    },
    {
        title: 'Politicial Breakdown',
        desc: 'Web application built using Express, Sequelize, and PSQL. Allows users to track stocks and view which U.S. Congress members are trading selected stocks. Utilized RESTful API to find Congress stock trading data.',
        stack: ['javascript', 'node', 'postgres', 'python'],
        gitLink: 'https://github.com/nchez/political-breakdown',
        deployLink: 'https://political-breakdown.herokuapp.com/'
    },
    {
        title: 'Rankify',
        desc: 'Web game built using React, MongoDB, and Mongoose. Worked with a team to create an app where a user  searches for and selects an artist, then a multiple choice game is played where the user guesses the song based on the audio clip. App relies on Spotify authorization and API. Acted as the Git manager and assisted the team in troubleshooting Git workflow.',
        stack: ['react', 'mongo', 'netlify'],
        deployLink: 'https://rankifygame.netlify.app/',
        gitLink: 'https://github.com/nchez/rankify-client/'
    },
    {
        title: 'Velo On Exit',
        desc: '',
        stack: ['javascript', 'next', 'python'],
        gitLink: 'https://github.com/nchez/Velo-on-Exit',
        deployLink: ''
    }
];

export const Projects = () => {
    return (
        <div className="projects-div">
            <div className="top-projects">
                {projects?.map((project, index) => {
                    if ([0, 1].includes(index)) {
                        return (
                            <Project projectData={projects[index]} />
                        )
                    }
                })}
            </div>
            <div className="bottom-projects">
                {projects?.map((project, index) => {
                    if ([2, 3].includes(index)) {
                        return (
                            <Project projectData={project} />
                        )
                    }
                })}
            </div>
        </div>
    )
}