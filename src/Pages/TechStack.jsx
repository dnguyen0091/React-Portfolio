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
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-[3vw] mt-8 w-[90%] max-w-5xl">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        ref={el => cardRefs.current[index] = el}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-[var(--tertiary)] bg-[var(--secondary)] relative overflow-hidden"
                    >
                        {/* Dynamic gradient background that follows cursor */}
                        {hoveredIndex === index && (
                            <motion.div 
                                className="absolute inset-0 opacity-70 z-0 pointer-events-none"
                                animate={{
                                    background: `radial-gradient(circle 120px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--accent), transparent)`
                                }}
                            />
                        )}
                        
                        {/* Content */}
                        <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] object-contain mb-3 relative z-10" 
                        />
                        <p className="text-base md:text-lg font-medium text-[var(--text-primary)] relative z-10">
                            {tech.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}