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
    const [showCopyNotification, setShowCopyNotification] = useState(false);

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
        setShowCopyNotification(true);
        setSocialsOpen(false);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            setShowCopyNotification(false);
        }, 3000);
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
        <>
            {/* Copy Email Notification Toast */}
            <AnimatePresence>
                {showCopyNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20,
                            duration: 0.4 
                        }}
                        className="absolute top-24 left-1/2 transform -translate-x-1/2 z-[9999]"
                    >
                        <div className="bg-[var(--secondary)] border border-[var(--border)] rounded-full px-6 py-3 shadow-2xl backdrop-blur-sm flex items-center gap-3">
                            {/* Success Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                                className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                            >
                                <svg 
                                    className="w-3 h-3 text-white" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={3} 
                                        d="M5 13l4 4L19 7" 
                                    />
                                </svg>
                            </motion.div>
                            
                            {/* Message */}
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.3 }}
                                className="text-[var(--text-primary)] font-medium text-sm"
                            >
                                Email copied to clipboard!
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex flex-row justify-between items-center w-[20vw] h-[5vh] z-[1000] top-5 left-[40vw] gap-[5vw] border-[var(--tertiary)] border-2 rounded-[5rem] bg-[var(--secondary)] p-5 sticky">
            <div className="dropDown relative cursor-pointer" ref={navRef} onClick={handleNavigateClick}>
                Navigate

                <AnimatePresence>
                    {navOpen && (
                        <motion.div 
                            className="navigateDropDown absolute top-full left-0 mt-4 z-50"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >                            <motion.div className="bg-[var(--secondary)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm min-w-[200px]">
                                {/* Menu Items */}
                                <div className="py-2">
                                    {navigationItems.map((item, index) => (
                                        <motion.div
                                            key={item.section}
                                            variants={itemVariants}
                                            custom={index}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            onClick={() => handleSectionClick(item.section)}
                                            whileHover={{ 
                                                backgroundColor: "var(--tertiary)",
                                                x: 8
                                            }}
                                            className="px-4 py-3 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                                        >
                                            <motion.div 
                                                className="w-2 h-2 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100"
                                                whileHover={{ scale: 1.2 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] font-medium">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
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
                            className="socialsDropDown absolute top-full left-0 mt-4 z-50"
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >                            <motion.div className="bg-[var(--secondary)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm min-w-[280px]">
                                {/* Social Items */}
                                <div className="py-2">
                                    {socialItems.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            variants={itemVariants}
                                            custom={index}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            whileHover={{ 
                                                backgroundColor: "var(--tertiary)",
                                                x: 8
                                            }}
                                            className="px-4 py-3 cursor-pointer transition-all duration-200 group"
                                        >
                                            {item.href ? (
                                                <a 
                                                    className="flex items-center gap-3" 
                                                    href={item.href} 
                                                    target={item.target}
                                                    rel="noopener noreferrer"
                                                >
                                                    <motion.div 
                                                        className="w-8 h-8 rounded-lg bg-[var(--tertiary)] p-1.5 group-hover:bg-[var(--accent)] transition-colors duration-200"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    >
                                                        <img 
                                                            className="w-full h-full object-contain" 
                                                            src={item.icon} 
                                                            alt={`${item.label} Icon`} 
                                                        />
                                                    </motion.div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[var(--text-primary)] font-medium group-hover:text-white transition-colors duration-200">
                                                            {item.label}
                                                        </span>
                                                        <span className="text-xs text-[var(--text-secondary)] group-hover:text-gray-300">
                                                            {item.label === 'LinkedIn' ? 'Professional Network' : 'Code Repository'}
                                                        </span>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div 
                                                    className="flex items-center gap-3" 
                                                    onClick={item.onClick}
                                                >
                                                    <motion.div 
                                                        className="w-8 h-8 rounded-lg bg-[var(--tertiary)] p-1.5 group-hover:bg-[var(--accent)] transition-colors duration-200"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    >
                                                        <img 
                                                            className="w-full h-full object-contain" 
                                                            src={item.icon} 
                                                            alt={`${item.label} Icon`} 
                                                        />
                                                    </motion.div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[var(--text-primary)] font-medium group-hover:text-white transition-colors duration-200 text-sm">
                                                            Copy Email
                                                        </span>
                                                        <span className="text-xs text-[var(--text-secondary)] group-hover:text-gray-300 truncate max-w-[200px]">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
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
        </>
    )
}