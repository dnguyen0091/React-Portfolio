import { useEffect, useRef, useState } from 'react';
import emailIconDark from '../assets/Icons/emailIcon.svg';
import emailIconLight from '../assets/Icons/emailIconLight.svg';
import gitHubIconDark from '../assets/Icons/githubIcon.svg';
import gitHubIconLight from '../assets/Icons/githubIconLight.svg';
import linkedInIconDark from '../assets/Icons/linkedInIcon.svg';
import linkedInIconLight from '../assets/Icons/linkedInIconLight.svg';
import moonIcon from '../assets/Icons/moon.svg';
import sunIcon from '../assets/Icons/sun.svg';

import '../index.css';
import toggleThemes from './toggleThemes';


export default function NavigationBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [socialsOpen, setSocialsOpen] = useState(false);

    const [colorMode, setColorMode] = useState("dark");
    const[colorImg, setColorImg] = useState(moonIcon);

    const[emailIcon, setEmailIcon] = useState(emailIconDark);
    const[gitHubIcon, setGitHubIcon] = useState(gitHubIconDark);
    const[linkedInIcon, setLinkedInIcon] = useState(linkedInIconDark);
    const navRef = useRef(null);
    const socialsRef = useRef(null);

    const handleSectionClick = (section) => {
        const element = document.getElementById(section);
        console.log(`Navigating to ${element}`);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setNavOpen(false);
    }


    // Handle clicks outside to close dropdowns
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNavOpen(false);
            }
            if (socialsRef.current && !socialsRef.current.contains(event.target)) {
                setSocialsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleNavigateClick = (e) => {
        e.stopPropagation();
        console.log("Navigate");
        setNavOpen(!navOpen);
        setSocialsOpen(false); 
    }

    const handleSocialsClick = (e) => {
        e.stopPropagation();
        console.log("Socials");
        setSocialsOpen(!socialsOpen);
        setNavOpen(false);
    }

    const handleColorClick = () => {
        console.log("Color");
        if (colorMode === "dark")
        {
            toggleThemes("light");
            setColorMode("light");
            setEmailIcon(emailIconLight);
            setGitHubIcon(gitHubIconLight);
            setLinkedInIcon(linkedInIconLight);
            setColorImg(sunIcon);
            console.log(colorMode);
        }
        else
        {
            toggleThemes("dark");
            setColorImg(moonIcon);
            setEmailIcon(emailIconDark);
            setGitHubIcon(gitHubIconDark);
            setLinkedInIcon(linkedInIconDark);
            setColorMode("dark");
            console.log(colorMode);
        }

    }

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("davidnguyen0091@icloud.com");
    }
    return(
        <div className="flex flex-row justify-between items-center w-[20vw] h-[5vh] z-[1000] top-5 left-[40vw] gap-[5vw] border-[var(--tertiary)] border-2 rounded-[5rem] bg-[var(--secondary)] p-5 sticky">
            <div className="dropDown relative cursor-pointer" ref={navRef} onClick={handleNavigateClick}>
                Navigate

                <div className={`navigateDropDown absolute top-full left-0 mt-4 gap-[2vh] ${navOpen ? 'block' : 'hidden'}`}>
                    <div>
                        <div className="dropItems flex flex-col gap-[2vh] mt-3 p-2 rounded-lg bg-[var(--secondary)] text-[var(--text-secondary)]">
                            <div onClick={() => handleSectionClick('beginning')}>Landing Page</div>
                            <div onClick={() => handleSectionClick('about')}>About</div>
                            <div onClick={() => handleSectionClick('experience')}>Experience</div>
                            {/* <div onClick={()=> handleSectionClick('techStack')}>Tech Stack</div> */}
                            <div onClick={() => handleSectionClick('projects')}>Projects</div>
                            <div onClick={() => handleSectionClick('contact')}>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropDown relative cursor-pointer" ref={socialsRef} onClick={handleSocialsClick}>
                Socials

                <div className={`socialsDropDown absolute top-full left-0 mt-4 ${socialsOpen ? 'block' : 'hidden'}`}>
                    <div className="dropItems flex flex-col w-[12vw] gap-[2vh] mt-3 p-2 rounded-lg bg-[var(--secondary)] text-[var(--text-secondary)]">
                        <a className="flex flex-row items-center gap-1" href="https://www.linkedin.com/in/dnguyen0091/"><img className="w-[1.5vw] fill-[var(--text-primary)]" src={linkedInIcon} alt="LinkedIn Icon" />LinkedIn</a>
                        <a className="flex flex-row items-center gap-1" href="https://github.com/dnguyen0091"><img className="w-[1.5vw]" src={gitHubIcon} alt="GitHub Icon" />GitHub</a>
                        <div className="flex flex-row items-center gap-1" onClick={handleCopyEmail}><img className="w-[1.5vw] text-[var(--text-primary)]" src={emailIcon} alt="Email Icon" />davidnguyen0091@icloud.com</div>
                    </div>
                    
                </div>
            </div>
            
            <div className="cursor-pointer" onClick={handleColorClick}>
                <img src={colorImg} alt="Color Mode" className="w-[1.5vw]" />
            </div>
        </div>
    )
}