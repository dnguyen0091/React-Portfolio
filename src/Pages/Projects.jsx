import { motion } from "framer-motion";
import externalLinkIcon from "../assets/Icons/externalLinkIcon.svg";
import ResuMaker from "../assets/Projects/ResuMaker.png";
import '../index.css';
export default function Projects()
{
    

    const projects=[
        {title:"ResuMaker", description:"AI Powered Resume Builder and Analyzer to help new hires navigate the job market.",img:ResuMaker, link:"",tags: ["React", "CSS", "Express.js"]},
        {title:"GainsBot", description:"AI Powered webapp meant to guide and provide new gym-goers crucial information on exercises to help them get started on a path to a healthier life.",img:ResuMaker, link:"",tags: ["React", "TailWind.CSS", "OpenAI API"]},
        {title:"Buddy Builder", description:"C.R.U.D webapp that helps users with managing contact information of friends/family.",img:ResuMaker, link:"",tags: ["JavaScript", "HTML/CSS", "MySQL"]},
        {title:"Weather Report", description:"Webpage that leverages APIs to obtain Weather Data from anywhere in the world.",img:ResuMaker, link:"",tags: ["JavaScript", "HTML/CSS", "VisualCrossing API"]},
        {title:"Shogi", description:"Japanese board-game, similar to Chess, created with just Python.",img:ResuMaker, link:"",tags: ["Python","Pygame"]},
        {title: "Dragon of Dojima AI", description:"Fine-tuned AI model trained to mimic video game character Kiryu Kazuma based on game dialogue and character background.",img:ResuMaker, link:"",tags: ["PyTorch", "Mistral7B", "HuggingFace Transformers"]},
    ]
    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center justify-center  gap-[2.5em] text-[var(--text-primary)]">
            <p className="mt-[10vh] mb-[8vh] text-[40px]">Projects</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8rem]">
                {projects.map((project, index) => (
                    <motion.div 
                    key={index}
                    initial={{ 
                        rotateX: 45,
                        opacity: 0,
                        scale: 0.8,
                        y: 50,
                        transformOrigin: "bottom"
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
                    viewport={{ once: true, amount: 0.3 }} 
                    className="group perspective-[1000px] origin-bottom transform-style-preserve-3d cursor-pointer"
                    whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <div className="relative bg-[var(--secondary)] rounded-lg shadow-lg border-t-4 border-[var(--accent)] overflow-hidden w-[25vw] aspect-video">
                        {/* Background Image */}
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Title Bar - Always Visible */}
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 z-20">
                            <h3 className="text-lg font-bold text-white">
                                {project.title}
                            </h3>
                        </div>
                        
                        {/* Hover Content - Slides up from bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                            <div className="text-white space-y-4">
                                <p className="text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items-center">
                                    <a 
                                        className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-hover)] transition-colors duration-200 text-sm" 
                                        href={project.link}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span>View Source</span>
                                        <img 
                                            src={externalLinkIcon} 
                                            className="w-4 h-4" 
                                            alt="External Link" 
                                        />
                                    </a>
                                    
                                    <div className="flex gap-1 flex-wrap">
                                        {project.tags?.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex}
                                                className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm border border-white/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
        </div>
        
    )
}