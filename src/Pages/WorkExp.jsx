import { motion } from 'framer-motion';
import { useState } from 'react';
import lockheedLogo from '../assets/Companies/Lockheed.png';
import publixLogo from '../assets/Companies/Publix.png';
import wickedBaoLogo from '../assets/Companies/wickedBao.png';

export default function WorkExp() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // Enhanced experience data with skills
    const experiences = [
        {
            company: "Lockheed Martin",
            logo: lockheedLogo,
            role: "CWEP Software Engineer",
            period: "May 2025-Present",
            details: [
                "Working as a software engineer in the CWEP program"
            ],
            skills: ["React", "JavaScript", "C++", "Embedded Systems"]
        },
        {
            company: "Wicked Bao LLC",
            logo: wickedBaoLogo,
            role: "Kitchen Expo & Customer Service",
            period: "June 2020-May 2025",
            details: [
                "Supported dining operations as a high school sophomore",
                "Advanced to a managerial role",
                "Maintained consistent seasonal employment for four years"
            ],
            skills: ["Leadership", "Training", "Operations", "Customer Service"]
        },
        {
            company: "Publix Supermarkets",
            logo: publixLogo,
            role: "Customer Service",
            period: "Feb 2019-June 2020",
            details: [
                "Worked collaboratively with cashiers and other team members"
            ],
            skills: ["Teamwork", "Communication", "Customer Service"]
        }
    ];

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[42px] font-bold text-[var(--text-primary)] mb-[8vh] mt-[10vh]"
                >
                    Professional Journey
                </motion.h2>
            
                <div className="relative max-w-3xl mx-auto">
                    {/* Gradient timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--tertiary)] via-[var(--accent)] to-[var(--tertiary)]"></div>
                    
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Logo circle with pulse effect */}
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                animate={hoveredIndex === index ? { 
                                    boxShadow: ["0 0 0 0 rgba(var(--accent-rgb), 0.7)", "0 0 0 10px rgba(var(--accent-rgb), 0)"],
                                } : {}}
                                transition={{ 
                                    duration: 1.5, 
                                    repeat: hoveredIndex === index ? Infinity : 0,
                                }}
                                className="z-10 flex-shrink-0"
                            >
                                <div className={`h-20 w-20 rounded-full border-4 ${hoveredIndex === index ? 'border-[var(--accent)]' : 'border-[var(--tertiary)]'} bg-white flex items-center justify-center p-3 shadow-lg transition-all duration-300`}>
                                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                                </div>
                            </motion.div>
                            
                            {/* Content card */}
                            <div 
                                className={`flex-1 ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}
                                style={{
                                    maxWidth: `${75 + (experiences.length - 1 - index) * 5}%` // Growth effect - earliest roles are smallest
                                }}
                            >
                                <motion.div 
                                    whileHover={{ 
                                        y: -8,
                                        boxShadow: "0 10px 30px -15px var(--shadow-color)" 
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-[var(--secondary)] p-6 rounded-lg shadow-lg border-t-4 border-[var(--accent)] relative"
                                >
                                    {/* Arrow pointer */}
                                    <div 
                                        className={`absolute top-1/2 -translate-y-1/2 ${
                                        index % 2 === 0 ? 'right-full mr-3' : 'left-full ml-3'
                                        } border-8 ${
                                        index % 2 === 0 
                                            ? 'border-r-[var(--secondary)] border-l-transparent' 
                                            : 'border-l-[var(--secondary)] border-r-transparent'
                                        } border-y-transparent`}
                                    ></div>
                                    
                                    {/* Role details */}
                                    <span className="uppercase tracking-wider text-xs text-[var(--text-secondary)]">{exp.period}</span>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-1">{exp.company}</h3>
                                    <h4 className="text-md font-medium text-[var(--accent)] mb-3">{exp.role}</h4>
                                    
                                    <ul className="list-disc pl-5 text-[var(--text-primary)] space-y-2">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                    
                                    {/* Skills gained in this role */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 text-xs rounded-full bg-[var(--tertiary)] text-[var(--text-secondary)]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}