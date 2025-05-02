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
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="mt-[10vh] text-[40px]">Current Tech Stack</p>

            <div className="grid grid-cols-4 grid-rows-2 gap-[3vw] mt-8">
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={reactIcon} alt="React" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">React</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={mongoDBIcon} alt="MongoDB" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">MongoDB</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={nodeIcon} alt="Node.js" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Node.js</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={expressIcon} alt="Express.js" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Express.js</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={nextIcon} alt="Next.js" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Next.js</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={tailwindIcon} alt="Tailwind" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Tailwind.css</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={gitIcon} alt="git" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Git</p></div>
                <div className="flex flex-col items-center gap-5 w-[10vw] h-[15vh] border-[var(--tertiary)] border-2 rounded-xl bg-[var(--secondary)]"><img src={pythonIcon} alt="Python" className="w-[5vw] h-[5vw] object-contain"/><p className="text-[20px]">Python</p></div>
            </div>
            
        </div>
    )
}