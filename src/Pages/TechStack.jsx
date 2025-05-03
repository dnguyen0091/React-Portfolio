import { useState } from 'react'
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
        {
            name: "React",
            icon: reactIcon
        },
        {
            name: "MongoDB",
            icon: mongoDBIcon
        },
        {
            name: "Node.js",
            icon: nodeIcon
        },
        {
            name: "Express.js",
            icon: expressIcon
        },
        {
            name: "Next.js",
            icon: nextIcon
        },
        {
            name: "Tailwind.css",
            icon: tailwindIcon
        },
        {
            name: "Git",
            icon: gitIcon
        },
        {
            name: "Python",
            icon: pythonIcon
        }
    ];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return(
        <div className="flex flex-col justify-center items-center">
            <p className="mt-[10vh] text-[40px]">Current Tech Stack</p>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-[3vw] mt-8">
                
                {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 bg-[var(--secondary)]">
                    <img src={tech.icon} alt={tech.name} className="w-[5vw] h-[5vw] object-contain"/>
                    <p className="text-[20px]">{tech.name}</p>
                </div>
                ))}
            </div>
            
        </div>
    )
}