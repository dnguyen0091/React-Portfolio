import { useEffect, useRef, useState } from 'react';
import emailIcon from '../assets/Icons/emailIcon.svg';
import gitHubIcon from '../assets/Icons/githubIcon.svg';
import linkedInIcon from '../assets/Icons/linkedInIcon.svg';
import toggleThemes from './toggleThemes';

export default function NavigationBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [socialsOpen, setSocialsOpen] = useState(false);
    let colorMode="dark";
    const navRef = useRef(null);
    const socialsRef = useRef(null);

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
            colorMode = "light";
            console.log(colorMode);
        }
        else
        {
            toggleThemes("dark");
            colorMode = "dark";
            console.log(colorMode);
        }

    }

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("davidnguyen0091@icloud.com");
    }
    return(
        <div className="flex flex-row justify-between items-center h-[5vh] z-1000 absolute top-5 left-[40vw] gap-[5vw] border-black border-2 rounded-[40px] bg-white p-5">
            <div className="dropDown relative" ref={navRef} onClick={handleNavigateClick}>
                Navigate

                <div className={`navigateDropDown absolute top-full left-0 mt-4 gap-[2vh] ${navOpen ? 'block' : 'hidden'}`}>
                    <div>
                        <div className="dropItems flex flex-col gap-[2vh] mt-3">
                            <div>Landing Page</div>
                            <div>About</div>
                            <div>Experience</div>
                            <div>Projects</div>
                            <div>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropDown relative" ref={socialsRef} onClick={handleSocialsClick}>
                Socials

                <div className={`socialsDropDown absolute top-full left-0 mt-4 ${socialsOpen ? 'block' : 'hidden'}`}>
                    <div className="dropItems flex flex-col gap-[2vh] mt-3">
                        <a className="flex flex-row items-center gap-1" href="https://www.linkedin.com/in/dnguyen0091/"><img className="w-[1.5vw]" src={linkedInIcon} alt="LinkedIn Icon" />LinkedIn</a>
                        <a className="flex flex-row items-center gap-1" href="https://github.com/dnguyen0091"><img className="w-[1.5vw]" src={gitHubIcon} alt="GitHub Icon" />GitHub</a>
                        <div className="flex flex-row items-center gap-1" onClick={handleCopyEmail}><img className="w-[1.5vw]" src={emailIcon} alt="Email Icon" />davidnguyen0091@icloud.com</div>
                    </div>
                    
                </div>
            </div>
            
            <div onClick={handleColorClick}>
                Color
            </div>
        </div>
    )
}