import '../index.css';

export default function Contact()
{
    return(
        <div className="flex flex-col items-center justify-center h-[50vh] gap-[2.5em] text-[var(--text-primary)]">
            <p className="mt-[10vh] text-[40px]">Contact Me</p>

            <form action="">
                <div className="flex flex-col gap-[2.5em]">
                    <div>
                        <p className="text-[20px]">Name</p>
                        <input type="text" placeholder="Ex. John Doe" className="h-[3vh] w-[15vw] p-2 border-[var0(--input-border)] border-[0.1rem] rounded-md bg-[var(--input-bg)]"/>
                    </div>
                    
                    <div>
                        <p className="text-[20px]">Email</p>
                        <input type="text" placeholder="Ex. example@example.org" className="h-[3vh] w-[15vw] p-2 border-[var0(--input-border)] border-[0.1rem] rounded-md bg-[var(--input-bg)]"/>
                    </div>
                    <div>
                        <p className="text-[20px]">Message</p>
                        <textarea placeholder="Message" className="h-[15vh] w-[15vw] p-2 border-[var0(--input-border)] border-[0.1rem] rounded-md bg-[var(--input-bg)] align-top resize-none"/>
                    </div>
                    <button type="submit" className="self-end bg-[var(--button-primary)] text-[var(--button-text)] h-[3vh] w-[5vw]">Submit</button>
                </div>
            </form>
        </div>
    )
}