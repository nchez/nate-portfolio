import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {FaFilePdf} from 'react-icons/fa';
import resume from './../resume.pdf';

export const Links = () => {
    return (
        <ul className="links">
            <li>
                <a href="https://www.linkedin.com/in/nathan-chesmar">
                    <FaLinkedin />
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://www.github.com/nchez">
                    <FaGithub />
                GitHub
                </a>
            </li>
            <li id={'resume'}>
                <a href={resume} download="NathanChesmar_Resume">
                    <FaFilePdf />
                Resume
                </a>
            </li>
            <li>
                <a href="mailto:nathan.chesmar@gmail.com">
                    <FaEnvelope />
                    Email
                </a>
            </li>
        </ul>
    )
}