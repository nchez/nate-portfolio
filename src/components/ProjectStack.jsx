import {BsFiletypeSql} from 'react-icons/bs';
import {BiLogoPostgresql, BiLogoMongodb, BiLogoFlask, BiLogoDocker, BiLogoNetlify} from 'react-icons/bi';
import {SiNextdotjs, SiGooglecloud, SiVercel, SiTypescript} from 'react-icons/si';
import {FaJsSquare, FaCss3, FaHtml5, FaReact, FaNodeJs, FaPython, FaAws} from 'react-icons/fa';
import {DiHeroku} from 'react-icons/di';

export const iconObject = {javascript: <FaJsSquare />, ejs: '', css: <FaCss3 />, html: <FaHtml5 />, react: <FaReact />, sql: <BsFiletypeSql />, postgres: <BiLogoPostgresql />, express: '', node: <FaNodeJs />, mongo: <BiLogoMongodb />, next: <SiNextdotjs />, flask: <BiLogoFlask />, python: <FaPython />, canvas: '', typescript: <SiTypescript />, vercel: <SiVercel />, docker: <BiLogoDocker />, aws: <FaAws />, gcp: <SiGooglecloud />, heroku: <DiHeroku />, atlas: '', mongoose: '', netlify: <BiLogoNetlify />};

export const ProjectStack = ({ stack }) => {
    return (
        <div className="project-stack">
            <p>Built with:</p>
            <ul>
                {stack.map(tech => {
                    return(
                        <li>
                            {!!iconObject[tech.toLowerCase()] ? iconObject[tech.toLowerCase()] : null}
                            <span>{['html', 'css', 'sql', 'aws', 'gcp'].includes(tech) ? tech.toUpperCase() : tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export const Skills = () => {
    
    return (
        <div className="skills-div">
            <ul>
                {Object.keys(iconObject).map(tech => {
                    if (!!iconObject[tech.toLowerCase()]) return(
                        <li>
                            {iconObject[tech.toLowerCase()]}
                            <span>{['html', 'css', 'sql', 'aws', 'gcp'].includes(tech) ? tech.toUpperCase() : tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}