import { motion } from 'framer-motion'
import { useState } from 'react'
import expressIcon from '../assets/Tech Stack/expressjs.png'
import gitIcon from '../assets/Tech Stack/git.png'
import mongoDBIcon from '../assets/Tech Stack/mongodb.png'
import nextIcon from '../assets/Tech Stack/nextjs.svg'
import nodeIcon from '../assets/Tech Stack/nodejs.png'
import pythonIcon from '../assets/Tech Stack/python.png'
import reactIcon from '../assets/Tech Stack/reactjs.png'
import tailwindIcon from '../assets/Tech Stack/tailwindcss.png'

export default function TechStack() {
    const techStack = [
        { name: "React", icon: reactIcon, category: "Frontend" },
        { name: "Next.js", icon: nextIcon, category: "Frontend" },
        { name: "Tailwind CSS", icon: tailwindIcon, category: "Frontend" },
        { name: "Node.js", icon: nodeIcon, category: "Backend" },
        { name: "Express.js", icon: expressIcon, category: "Backend" },
        { name: "MongoDB", icon: mongoDBIcon, category: "Database" },
        { name: "Git", icon: gitIcon, category: "Version Control" },
        { name: "Python", icon: pythonIcon, category: "Language" }
    ];

    const [hoveredTech, setHoveredTech] = useState(null);

    const categoryColors = {
        "Frontend": "#61DAFB",
        "Backend": "#339933", 
        "Database": "#47A248",
        "Version Control": "#F05032",
        "Language": "#3776AB"
    };

    return (
        <div className="min-h-screen py-20">
            <div className="flex flex-col items-center justify-center gap-[2.5em] text-[var(--text-primary)]">
                <motion.p 
                    className="mt-[10vh] mb-[8vh] text-[40px]"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Tech Stack
                </motion.p>

                {/* Tech Stack Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ 
                                rotateX: 45,
                                opacity: 0,
                                scale: 0.8,
                                y: 50
                            }}
                            whileInView={{ 
                                rotateX: 0,
                                opacity: 1,
                                scale: 1,
                                y: 0 
                            }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 70,
                                damping: 15,
                                delay: index * 0.1
                            }}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)"
                            }}
                            onHoverStart={() => setHoveredTech(tech.name)}
                            onHoverEnd={() => setHoveredTech(null)}
                            className="group perspective-[1000px] cursor-pointer"
                        >
                            <div className="relative bg-[var(--secondary)] rounded-lg shadow-lg border-t-4 border-[var(--accent)] overflow-hidden w-[250px] h-[180px] mx-auto">
                                
                                {/* Animated Background Gradient */}
                                <motion.div
                                    className="absolute inset-0 opacity-5"
                                    style={{ 
                                        background: `linear-gradient(45deg, ${categoryColors[tech.category]}, transparent)` 
                                    }}
                                    animate={{
                                        scale: hoveredTech === tech.name ? 1.1 : 1,
                                        opacity: hoveredTech === tech.name ? 0.1 : 0.05
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Content Container */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6">
                                    
                                    {/* Tech Icon */}
                                    <motion.div
                                        className="mb-4"
                                        animate={{
                                            rotate: hoveredTech === tech.name ? [0, 5, -5, 0] : 0,
                                            scale: hoveredTech === tech.name ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img 
                                            src={tech.icon} 
                                            alt={tech.name}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </motion.div>

                                    {/* Tech Name */}
                                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 text-center">
                                        {tech.name}
                                    </h3>

                                    {/* Category Badge */}
                                    <span 
                                        className="text-xs px-3 py-1 rounded-full font-medium"
                                        style={{
                                            backgroundColor: `${categoryColors[tech.category]}20`,
                                            color: categoryColors[tech.category]
                                        }}
                                    >
                                        {tech.category}
                                    </span>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-0 pointer-events-none"
                                        animate={{
                                            opacity: hoveredTech === tech.name ? 0.1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Animated Border Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                                    style={{
                                        background: `linear-gradient(45deg, ${categoryColors[tech.category]}, transparent) border-box`,
                                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                        WebkitMaskComposite: 'exclude'
                                    }}
                                    animate={{
                                        opacity: hoveredTech === tech.name ? 0.6 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Description */}
                <motion.div
                    className="mt-8 text-center max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className="text-[var(--text-secondary)] text-lg">
                        My technology toolkit for building modern, scalable web applications and solving complex problems.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}