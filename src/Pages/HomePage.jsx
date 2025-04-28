import Resume from "../assets/ResumeDraft.pdf";



export default function HomePage() {


    const handleContactClick = () => {
        console.log("Contact");
        const element = document.getElementById("contact");
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return(
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center mt-[40vh]">
                <p className="text-[40px]">Hello, I'm David.</p>
                <p className="text-[40px]">I am a passionate Software Engineer.</p>
                <div className="flex flex-row gap-10 mt-10">
                    
                    <a href={Resume} download="DavidNguyenCV"><button className="border-[var(--button-secondary)] border-2 rounded-xl w-[5vw] bg-[var(--button-primary)] text-[var(--button-text)] p-[0.75rem]">Download CV</button></a>
                    <button className="border-[var(--button-secondary)] border-2 rounded-xl w-[5vw] bg-[var(--button-primary)] text-[var(--button-text)] p-[0.75rem]" onClick={handleContactClick}>Contact Me</button>
                </div>
            </div>
        </div>
        
    )

}