

export default function AboutPage()
{

    return(
        <div className="h-screen">
            <div className="flex flex-col">
                <p className="text-[40px]">About</p>
                <div className="flex flex-row items-center justify-center mt-[40vh] gap-[10vw]">
                    <div className="flex flex-col items-center justify-center">
                        <img src="" alt="Placeholder For Headshot" />
                        <p>Info About Me</p>
                    </div>

                    <div>
                        <img src="" alt="React" />
                        <img src="" alt="MongoDB" />
                        <img src="" alt="Node.js" />
                        <img src="" alt="Express.js" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}