



export default function HomePage() {

    const handleDownLoadCV = () => {
        console.log("Download CV");
    }

    const handleContactClick = () => {
        console.log("Contact");
    }
    return(
        <div className="flex flex-col items-center justify-center mt-[40vh]">
            <p className="text-[40px]">Hello, I'm David.</p>
            <p className="text-[40px]">I am a passionate Software Engineer.</p>
            <div className="flex flex-row gap-10 mt-10">
                <button className="" onClick={handleDownLoadCV()}>Download CV</button>
                <button className="" onClick={handleContactClick()}>Contact</button>
            </div>
        </div>
    )

}