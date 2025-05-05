import ResuMaker from "../assets/Projects/ResuMaker.png"

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
    return(
        <div className="flex flex-col items-center justify-center h-[50vh] gap-[2.5em] text-[var(--text-primary)]">
            <p className="mt-[10vh] text-[40px]">Projects</p>

            <div className="flex">
                
            </div>
        </div>
    )
}