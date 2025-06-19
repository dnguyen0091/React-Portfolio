import { AnimatePresence, motion } from 'framer-motion';
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

    // Animation variants for dropdowns
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -10,
            transition: {
                duration: 0.15
            }
        },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.05,
                duration: 0.2,
                ease: "easeOut"
            }
        })
    };

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

    const navigationItems = [
        { label: 'Landing Page', section: 'beginning' },
        { label: 'About', section: 'about' },
        { label: 'Tech Stack', section: 'techStack' },
        { label: 'Experience', section: 'experience' },
        { label: 'Projects', section: 'projects' }
    ];

    const socialItems = [
        { label: 'LinkedIn', icon: linkedInIcon, href: 'https://www.linkedin.com/in/dnguyen0091/', target: '_blank' },
        { label: 'GitHub', icon: gitHubIcon, href: 'https://github.com/dnguyen0091', target: '_blank' },
        { label: 'davidnguyen0091@icloud.com', icon: emailIcon, onClick: handleCopyEmail }
    ];

    return(
        <div className="flex flex-row justify-between items-center w-[20vw] h-[5vh] z-[1000] top-5 left-[40vw] gap-[5vw] border-[var(--tertiary)] border-2 rounded-[5rem] bg-[var(--secondary)] p-5 sticky">
            <div className="dropDown relative cursor-pointer" ref={navRef} onClick={handleNavigateClick}>
                Navigate

                <AnimatePresence>
                    {navOpen && (
                        <motion.div 
                            className="navigateDropDown absolute top-full left-0 mt-4 gap-[2vh]"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.div className="dropItems flex flex-col gap-[2vh] mt-3 p-2 rounded-lg bg-[var(--secondary)] text-[var(--text-secondary)]">
                                {navigationItems.map((item, index) => (
                                    <motion.div
                                        key={item.section}
                                        variants={itemVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        onClick={() => handleSectionClick(item.section)}
                                        whileHover={{ x: 5, color: "var(--text-primary)" }}
                                        className="cursor-pointer transition-colors duration-200"
                                    >
                                        {item.label}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="dropDown relative cursor-pointer" ref={socialsRef} onClick={handleSocialsClick}>
                Socials

                <AnimatePresence>
                    {socialsOpen && (
                        <motion.div 
                            className="socialsDropDown absolute top-full left-0 mt-4"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.div className="dropItems flex flex-col w-[12vw] gap-[2vh] mt-3 p-2 rounded-lg bg-[var(--secondary)] text-[var(--text-secondary)]">
                                {socialItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        variants={itemVariants}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        whileHover={{ x: 5, color: "var(--text-primary)" }}
                                        className="cursor-pointer transition-colors duration-200"
                                    >
                                        {item.href ? (
                                            <a className="flex flex-row items-center gap-1" href={item.href} target={item.target}>
                                                <img className="w-[1.5vw]" src={item.icon} alt={`${item.label} Icon`} />
                                                {item.label}
                                            </a>
                                        ) : (
                                            <div className="flex flex-row items-center gap-1" onClick={item.onClick}>
                                                <img className="w-[1.5vw]" src={item.icon} alt={`${item.label} Icon`} />
                                                {item.label}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            
            <motion.div 
                className="cursor-pointer" 
                onClick={handleColorClick}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <img src={colorImg} alt="Color Mode" className="w-[1.5vw]" />
            </motion.div>
        </div>
    )
}