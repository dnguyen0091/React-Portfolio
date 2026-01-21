import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import lockheedLogo from '../assets/Companies/Lockheed.png';
import openSourceLogo from '../assets/Companies/openSource.svg';
import publixLogo from '../assets/Companies/Publix.png';
import wickedBaoLogo from '../assets/Companies/wickedBao.png';

export default function WorkExp() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // Experience data with date information for timeline positioning
    const experiences = [
        {
            company: "Publix Supermarkets",
            logo: publixLogo,
            role: "Customer Service",
            period: "Feb 2019 - June 2020",
            startYear: 2019,
            startMonth: 2,
            endYear: 2020,
            endMonth: 6,
            isCurrentRole: false,
            details: [
                "Worked collaboratively with cashiers and other team members"
            ],
            skills: ["Teamwork", "Communication", "Customer Service"],
            link: "https://www.publix.com/"
        },
        {
            company: "Wicked Bao LLC",
            logo: wickedBaoLogo,
            role: "Kitchen Expo & Customer Service",
            period: "June 2020 - May 2025",
            startYear: 2020,
            startMonth: 6,
            endYear: 2025,
            endMonth: 5,
            isCurrentRole: false,
            details: [
                "Supported dining operations as a high school sophomore",
                "Advanced to a managerial role",
                "Maintained consistent seasonal employment for five years"
            ],
            skills: ["Leadership", "Training", "Operations", "Customer Service"],
            link: "https://wickedbao.com/"
        },
        {
            company: "Lockheed Martin",
            logo: lockheedLogo,
            role: "CWEP Software Engineer",
            period: "May 2025 - Present",
            startYear: 2025,
            startMonth: 5,
            endYear: 2026,
            endMonth: 6,
            isCurrentRole: true,
            details: [
                "Engineered an enterprise-level, scalable chat module to centralize communications for 13,000+ global suppliers, streamlining the SDLC for mission-critical contract modification approval workflows",
                "Leveraged Agile methodologies to collaborate with cross-functional stakeholders and application boards, prioritizing technical debt reduction and feature roadmaps to meet strategic business objectives",
                "Designed and implemented responsive UI components compliant with WCAG accessibility standards, significantly enhancing the User Experience (UX) and interface reliability for high-security supplier portals"
            ],
            skills: ["C#", "SQL", ".NET", "Blazor", "Agile Development"],
            link: "https://www.lockheedmartin.com/en-us/careers/why-lm/business-areas/eo.html"
        },
        {
            company: "Cybersecurity Scoring Engine",
            logo: openSourceLogo,
            role: "OSS Software Engineer",
            period: "Aug 2025 - Present",
            startYear: 2025,
            startMonth: 8,
            endYear: 2026,
            endMonth: 6,
            isCurrentRole: true,
            details: [
                "Engineered a real-time Observability Dashboard using Python and Redis to provide 1,000+ participants with live machine health telemetry and status updates during high-traffic CTF competitions",
                "Orchestrated containerized deployment workflows via Docker, automating complex environment setups and reducing the technical barrier for entry for entry-level participants",
                "Contributed to the OSS repository by identifying and remediating critical security vulnerabilities and performance bottlenecks through rigorous patch management and bug fixes"
            ],
            skills: ["Python", "Open Source", "Collaboration", "Cybersecurity"],
            link: "https://github.com/scoringengine/scoringengine?tab=readme-ov-file"
        }
    ];

    // Timeline configuration
    const timelineStart = 2019;
    const timelineEnd = 2027;
    const years = useMemo(() => 
        Array.from({ length: timelineEnd - timelineStart }, (_, i) => timelineStart + i),
        []
    );

    // Calculate position percentage on timeline
    const getPositionPercent = (year, month) => {
        const totalMonths = (timelineEnd - timelineStart) * 12;
        const monthsFromStart = (year - timelineStart) * 12 + (month - 1);
        return (monthsFromStart / totalMonths) * 100;
    };

    // Calculate duration bar row to handle overlaps
    const getDurationBarRow = (expIndex) => {
        let row = 0;
        for (let i = 0; i < expIndex; i++) {
            const prevExp = experiences[i];
            const currExp = experiences[expIndex];
            // Check if overlapping
            const prevEnd = prevExp.endYear * 12 + prevExp.endMonth;
            const currStart = currExp.startYear * 12 + currExp.startMonth;
            if (currStart < prevEnd) {
                row++;
            }
        }
        return row;
    };

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center px-4">
                <motion.p 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-[42px] font-bold text-[var(--text-primary)] mb-[2vh] mt-[10vh]"
                >
                    Professional Journey
                </motion.p>
            
                {/* Horizontal Timeline Container */}
                <div className="w-full px-8">
                    <div className="relative w-full min-h-[80vh] py-16">
                        
                        {/* Year Labels */}
                        <div className="absolute top-1/2 left-[5%] right-[5%] flex justify-between -translate-y-1/2">
                            {years.map((year) => (
                                <motion.div
                                    key={year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (year - timelineStart) * 0.05 }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-sm font-medium text-[var(--text-secondary)] mb-2">{year}</span>
                                    <div className="w-0.5 h-4 bg-[var(--tertiary)]"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Main Timeline Line */}
                        <div className="absolute top-1/2 left-[5%] right-[5%] h-1 bg-gradient-to-r from-[var(--tertiary)] via-[var(--accent)] to-[var(--tertiary)] rounded-full transform -translate-y-1/2"></div>

                        {/* Duration Bars */}
                        {experiences.map((exp, index) => {
                            const startPercent = getPositionPercent(exp.startYear, exp.startMonth);
                            const endPercent = getPositionPercent(exp.endYear, exp.endMonth);
                            const width = endPercent - startPercent;
                            const row = getDurationBarRow(index);
                            
                            return (
                                <motion.div
                                    key={`bar-${index}`}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileInView={{ scaleX: 1, opacity: 1 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: index * 0.2,
                                        ease: "easeOut"
                                    }}
                                    style={{
                                        left: `calc(5% + ${startPercent * 0.9}%)`,
                                        width: `${width * 0.9}%`,
                                        top: `calc(50% + ${20 + row * 16}px)`,
                                    }}
                                    className={`absolute h-2 rounded-full origin-left ${
                                        exp.isCurrentRole 
                                            ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--link)]' 
                                            : 'bg-[var(--accent)]/40'
                                    }`}
                                >
                                    {/* Pulsing end cap for current role */}
                                    {exp.isCurrentRole && (
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.8, 0.3, 0.8]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--link)]"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}

                        {/* Experience Icons with Popovers */}
                        {experiences.map((exp, index) => {
                            const leftPercent = getPositionPercent(exp.startYear, exp.startMonth);
                            const isAbove = index % 2 === 0;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                        delay: index * 0.15
                                    }}
                                    style={{
                                        left: `calc(5% + ${leftPercent * 0.9}%)`,
                                    }}
                                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Icon Container */}
                                    <div className="relative">
                                        {/* Pulsing ring for current role */}
                                        {exp.isCurrentRole && (
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.6, 1],
                                                    opacity: [0.6, 0, 0.6]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 rounded-full bg-[var(--accent)]"
                                            />
                                        )}
                                        
                                        {/* Company Logo Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`relative h-16 w-16 rounded-full border-4 ${
                                                hoveredIndex === index 
                                                    ? 'border-[var(--accent)]' 
                                                    : 'border-[var(--tertiary)]'
                                            } bg-white flex items-center justify-center p-2 shadow-lg cursor-pointer transition-colors duration-300`}
                                        >
                                            <img 
                                                src={exp.logo} 
                                                alt={exp.company} 
                                                className="h-full w-full object-contain"
                                            />
                                        </motion.div>

                                        {/* Connector line to popover */}
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ scaleY: 0, opacity: 0 }}
                                                    animate={{ scaleY: 1, opacity: 1 }}
                                                    exit={{ scaleY: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[var(--accent)] origin-${isAbove ? 'bottom' : 'top'} ${
                                                        isAbove ? 'bottom-full mb-0' : 'top-full mt-0'
                                                    }`}
                                                />
                                            )}
                                        </AnimatePresence>

                                        {/* Popover Card */}
                                        <AnimatePresence>
                                            {hoveredIndex === index && (
                                                <motion.div
                                                    initial={{ 
                                                        opacity: 0, 
                                                        y: isAbove ? 20 : -20,
                                                        scale: 0.9
                                                    }}
                                                    animate={{ 
                                                        opacity: 1, 
                                                        y: 0,
                                                        scale: 1
                                                    }}
                                                    exit={{ 
                                                        opacity: 0, 
                                                        y: isAbove ? 10 : -10,
                                                        scale: 0.95
                                                    }}
                                                    transition={{ 
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 25
                                                    }}
                                                    className={`absolute left-1/2 -translate-x-1/2 w-[22rem] max-w-[90vw] ${
                                                        isAbove 
                                                            ? 'bottom-full mb-10' 
                                                            : 'top-full mt-10'
                                                    }`}
                                                >
                                                    <div className={`bg-[var(--secondary)] p-5 rounded-lg shadow-xl border-2 border-[var(--accent)] relative`}>
                                                        {/* Arrow pointer */}
                                                        <div className={`absolute left-1/2 -translate-x-1/2 ${
                                                            isAbove 
                                                                ? 'top-full border-t-[var(--accent)] border-b-transparent' 
                                                                : 'bottom-full border-b-[var(--accent)] border-t-transparent'
                                                        } border-8 border-x-transparent`}></div>
                                                        
                                                        {/* Header with link */}
                                                        <div className="flex items-start justify-between mb-2">
                                                            <div>
                                                                <span className="uppercase tracking-wider text-xs text-[var(--text-secondary)]">
                                                                    {exp.period}
                                                                </span>
                                                                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                                                                    {exp.company}
                                                                </h3>
                                                                <h4 className="text-sm font-medium text-[var(--accent)]">
                                                                    {exp.role}
                                                                </h4>
                                                            </div>
                                                            <a 
                                                                href={exp.link} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="text-[var(--accent)] hover:text-[var(--link)] transition-colors"
                                                            >
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                        
                                                        {/* Details */}
                                                        <ul className="list-disc pl-4 text-sm text-[var(--text-primary)] space-y-1 mb-3">
                                                            {exp.details.map((detail, i) => (
                                                                <li key={i} className="leading-snug">{detail}</li>
                                                            ))}
                                                        </ul>
                                                        
                                                        {/* Skills */}
                                                        <div className="flex flex-wrap gap-1.5">
                                                            {exp.skills.map((skill, i) => (
                                                                <span 
                                                                    key={i} 
                                                                    className="px-2 py-0.5 text-xs rounded-full bg-[var(--tertiary)] text-[var(--text-secondary)]"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-6 mt-4 text-sm text-[var(--text-secondary)]"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-[var(--text-tertiary)]">Hover icons for details</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}