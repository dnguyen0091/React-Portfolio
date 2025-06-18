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
                    className="flex flex-row gap-10 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: text1.length * 0.1 + text2.length * 0.08 + 1, duration: 0.5 }}
                >
                    <a href={Resume} download="DavidNguyenCV">
                        <button className="border-[var(--button-secondary)] border-2 rounded-xl w-[5vw] bg-[var(--button-primary)] text-[var(--button-text)] p-[0.75rem]">
                            Download CV
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/dnguyen0091/" target="_blank"
                        className="border-[var(--button-secondary)] border-2 rounded-xl w-[5vw] bg-[var(--button-primary)] text-[var(--button-text)] p-[0.75rem] justify-center items-center flex" 
                        onClick={handleContactClick}
                    >
                        Connect
                    </a>
                </motion.div>
            </div>
        </div>
    )
}