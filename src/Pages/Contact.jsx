

export default function Contact()
{
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-[40px]">Contact</p>

            <form action="">
                <div className="flex flex-col">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Message"/>
                </div>
            </form>
        </div>
    )
}