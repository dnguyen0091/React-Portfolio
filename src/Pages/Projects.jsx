import { motion } from "framer-motion"
import ResuMaker from "../assets/Projects/ResuMaker.png"
import '../index.css'
export default function Projects()
{

    const projects=[
        {title:"ResuMaker", description:"",img:ResuMaker, link:""},
        {title:"GainsBot", description:"",img:ResuMaker, link:""},
        {title:"Buddy Builder", description:"",img:ResuMaker, link:""},
        {title:"Weather Report", description:"",img:ResuMaker, link:""},
        {title:"Shogi", description:"",img:ResuMaker, link:""},
        {title: "Dragon of Dojima AI", description:"",img:ResuMaker, link:""},
    ]
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-[2.5em] text-[var(--text-primary)]">
            <p className="mt-[10vh] text-[40px]">Projects</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div 
                    key={index}
                    initial={{ 
                        rotateX: 45,   // Start reclined backward (positive angle)
                        opacity: 0,
                        scale: 0.8,
                        y: 50,
                        transformOrigin: "bottom"  // Rotation origin at bottom of element
                    }} 
                    whileInView={{ 
                        rotateX: 0,    // Move to upright position
                        opacity: 1,
                        scale: 1,
                        y: 0 
                    }} 
                    transition={{ 
                        type: "spring", 
                        stiffness: 70,  // Slightly increased for more "snap"
                        damping: 15,    // Reduced for more bounce
                        delay: index * 0.1
                    }} 
                    viewport={{ once: true, amount: 0.3 }} 
                    className="perspective-[1000px] origin-bottom transform-style-preserve-3d"
                    whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                >
                        <div className="bg-[var(--secondary)] p-6 rounded-lg shadow-lg border-t-4 border-[var(--accent)] relative flex flex-col items-center w-full aspect-video">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-center">{project.description}</p>
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-auto object-cover mt-4 rounded"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)] origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}