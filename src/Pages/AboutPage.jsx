import headshot from '../assets/headshot.jpg';

export default function AboutPage()
{

    return(
        <div className="h-[50vh]">
            <div className="flex flex-col justify-center items-center">
                <p className="mt-[10vh] text-[40px]">About</p>
                <div className="flex flex-row items-center justify-center mt-[10vh] gap-[10vw]">
                        
                        <p className="text-[20px] w-[25vw]">
                            I picked up Web Development back in 2022 as a way to learn more about coding. From there I fully delved into the rabbit hole of the world of software engineering.
                            I discovered my passion for learning and the creation, which led me to pursue a career in this field. I am currently a student at the Unviversity of Central Florida, where I am studying Computer Science.
                            Outside of school and work, you can find me working on a personal project, enjoying games, at the gym, or spending time with my friends and family.
                            I am always looking for new opportunities to learn and grow, so if you have any questions or would like to connect, feel free to reach out!
                        </p>
                        <img src={headshot} alt="Placeholder For Headshot" className="w-[24rem] h-[24rem] rounded-full object-cover border-4 border-[var(--accent)]"/>
                </div>
            </div>
        </div>
    )
}