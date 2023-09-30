import {useState, useEffect} from 'react'

const sections = ['home', 'projects', 'experience', 'resume', 'skills'];

export const Navbar = ({navbarSections, section, setSection, setNavbarScroll, scrollListener}) => {
    const classPositions = { home: 'first', projects: 'two', experience: 'three', resume: 'four', skills: 'last'};
    navbarSections.forEach((sction, index) => {
        const positionMap = {
            0: 'first',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'last'
        };
        if (index === 0) {
            classPositions[sction] = positionMap[0];
        } else if (index === navbarSections.length - 1) {
            classPositions[sction] = positionMap[-1];
        } else {
            classPositions[sction] = positionMap[index];
        }
    });

    const navbarClick = (e, section) => {
        e.preventDefault();
        setNavbarScroll(true);
        const anchorHeights = {
        };
        navbarSections.forEach((navSection) => {
            anchorHeights[navSection] = 0;
        })
        // const anchorHeights = {
        //         home: 0,
        //         projects: 0,
        //         experience: 0,
        //         resume: 0,
        //         skills: 0,
        //     };
        const anchorNodes = Array.from(document.querySelectorAll('section > a'));
        anchorNodes.forEach((anchor) => {
            anchorHeights[anchor.name] = anchor.offsetTop;
        });
        window.scrollTo(undefined, anchorHeights[section] + 30);
        setTimeout(() => setNavbarScroll(false), 400);
    };

    useEffect(() => {

    }, [navbarSections]);

    return (
        <div className="navbar">
            <ul>
                <div className={`navbar-slider`} style={{left: `calc(${navbarSections.indexOf(section) / (navbarSections.length)} * 100%)`, borderRadius: `${navbarSections.indexOf(section) === 0 ? '5px 0px 0px 5px' : navbarSections.indexOf(section) === navbarSections.length - 1 ? '0px 5px 5px 0px' : ''}`}}></div>
                {navbarSections.map((staticSection => {
                    return (
                        <a href={`#${staticSection}`} className={staticSection === section ? 'active' : ''} 
                            onClick={(e) => {
                                navbarClick(e, staticSection);
                            }} key={staticSection} >
                            <li>
                            {staticSection.charAt(0).toUpperCase() + staticSection.slice(1)}
                            </li>
                        </a>
                    )
                }))}
            </ul>
        </div>
    )
}