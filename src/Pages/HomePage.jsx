import { motion } from 'framer-motion';
import { useState } from 'react';
import Resume from "../assets/ResumeDraft.pdf";

export default function HomePage() {
    const [showCursor1, setShowCursor1] = useState(true);
    const [showCursor2, setShowCursor2] = useState(false);

    const text1 = "Hello, I'm David.";
    const text2 = "I am a Software Engineer.";

    const handleContactClick = () => {
        console.log("Contact");
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <div className="h-[50vh]">
            <div className="flex flex-col items-center justify-center mt-[38vh]">
                <div className="text-[40px] flex items-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                    >
                        {text1.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.1,
                                    duration: 0.1 
                                }}
                                onAnimationComplete={() => {
                                    if (index === text1.length - 1) {
                                        setTimeout(() => {
                                            setShowCursor1(false);
                                            setShowCursor2(true);
                                        }, 500);
                                    }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                    {showCursor1 && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="ml-1"
                        >
                            |
                        </motion.span>
                    )}
                </div>

                <div className="text-[40px] flex items-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showCursor2 ? 1 : 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        {text2.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: showCursor2 ? 1 : 0 }}
                                transition={{ 
                                    delay: showCursor2 ? index * 0.08 : 0,
                                    duration: 0.1 
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                    {showCursor2 && (
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="ml-1"
                        >
                            |
                        </motion.span>
                    )}
                </div>

                <motion.div 
                    className="flex flex-row gap-8 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                >
                    <motion.a 
                        href={Resume} 
                        download="DavidNguyenCV"
                        initial={{ 
                            rotateX: 45,
                            opacity: 0,
                            scale: 0.8,
                            y: 50
                        }}
                        animate={{ 
                            rotateX: 0,
                            opacity: 1,
                            scale: 1,
                            y: 0 
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 70,
                            damping: 15,
                            delay: 3.0
                        }}
                        whileHover={{ 
                            boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group perspective-[1000px] cursor-pointer"
                    >
                        <div className="relative bg-[var(--secondary)] rounded-lg shadow-lg border-t-4 border-[var(--accent)] overflow-hidden px-8 py-4 min-w-[180px]">
                            {/* Animated Background Gradient */}
                            <motion.div
                                className="absolute inset-0 opacity-5"
                                style={{ 
                                    background: "linear-gradient(45deg, var(--accent), transparent)" 
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    opacity: 0.15
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            <div className="relative flex items-center justify-center gap-3">
                                <motion.svg 
                                    className="w-5 h-5 text-[var(--accent)]" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </motion.svg>
                                <span className="text-[var(--text-primary)] font-semibold">
                                    Download CV
                                </span>
                            </div>
                            
                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 pointer-events-none"
                                whileHover={{ opacity: 0.5 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.a>

                    <motion.a 
                        href="https://www.linkedin.com/in/dnguyen0091/" 
                        target="_blank"
                        onClick={handleContactClick}
                        initial={{ 
                            rotateX: 45,
                            opacity: 0,
                            scale: 0.8,
                            y: 50
                        }}
                        animate={{ 
                            rotateX: 0,
                            opacity: 1,
                            scale: 1,
                            y: 0 
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 70,
                            damping: 15,
                            delay: 3.3
                        }}
                        whileHover={{ 
                            boxShadow: "0 20px 25px -5px rgba(0, 119, 181, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group perspective-[1000px] cursor-pointer"
                    >
                        <div className="relative bg-[var(--secondary)] rounded-lg shadow-lg border-t-4 border-[var(--accent)] overflow-hidden px-8 py-4 min-w-[180px]">
                            {/* Animated Background Gradient */}
                            <motion.div
                                className="absolute inset-0 opacity-5"
                                style={{ 
                                    background: "linear-gradient(45deg, #0077B5, transparent)" 
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    opacity: 0.15
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            <div className="relative flex items-center justify-center gap-3">
                                <motion.svg 
                                    className="w-5 h-5 text-[#0077B5]" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </motion.svg>
                                <span className="text-[var(--text-primary)] font-semibold">
                                    Connect
                                </span>
                            </div>
                            
                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-[#0077B5] to-transparent opacity-0 pointer-events-none"
                                whileHover={{ opacity: 0.5 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}