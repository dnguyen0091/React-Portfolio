import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import expressIcon from '../assets/Tech Stack/expressjs.png'
import gitIcon from '../assets/Tech Stack/git.png'
import mongoDBIcon from '../assets/Tech Stack/mongodb.png'
import nextIcon from '../assets/Tech Stack/nextjs.png'
import nodeIcon from '../assets/Tech Stack/nodejs.png'
import pythonIcon from '../assets/Tech Stack/python.png'
import reactIcon from '../assets/Tech Stack/reactjs.png'
import tailwindIcon from '../assets/Tech Stack/tailwindcss.png'

export default function TechStack()
{
    const techStack = [
        {name: "React",icon: reactIcon},
        {name: "MongoDB",icon: mongoDBIcon},
        {name: "Node.js",icon: nodeIcon},
        {name: "Express.js",icon: expressIcon},
        {name: "Next.js",icon: nextIcon},
        {name: "Tailwind.css",icon: tailwindIcon},
        {name: "Git",icon: gitIcon},
        {name: "Python",icon: pythonIcon}
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRefs = useRef([]);


    const handleMouseMove = (e, index) => {
        if (!cardRefs.current[index]) return;
        
        const card = cardRefs.current[index];
        const rect = card.getBoundingClientRect();
        
        // Calculate relative position within card (0-1)
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
        setHoveredIndex(index);
    };
    return(
        <div className="flex flex-col justify-center items-center">
            {/* <p className="mt-[10vh] text-[40px]">Current Tech Stack</p> */}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-[3vw] w-[90%] max-w-5xl mt-[10vh]">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                                duration: 0.5,
                                delay: index * 0.1
                            }
                        }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="group flex flex-col items-center justify-center p-5 rounded-lg bg-[var(--secondary)] relative overflow-hidden"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Border animation */}
                        <motion.div 
                            className="absolute inset-0 border-2 border-[var(--tertiary)] rounded-lg pointer-events-none"
                            initial={{ pathLength: 0 }}
                            whileInView={{ 
                                pathLength: 1,
                                transition: { 
                                    delay: index * 0.1 + 0.2,
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }
                            }}
                            viewport={{ once: true }}
                        />
                        
                        {/* Hover effect */}
                        {hoveredIndex === index && (
                            <motion.div 
                                className="absolute inset-0 z-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    background: `radial-gradient(circle 120px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--accent), transparent)`
                                }}
                            />
                        )}
                        
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ 
                                y: 0, 
                                opacity: 1,
                                transition: { 
                                    delay: index * 0.1 + 0.4,
                                    duration: 0.5
                                }
                            }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] object-contain mb-3" 
                            />
                            <p className="text-base md:text-lg font-medium text-[var(--text-primary)]">
                                {tech.name}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}