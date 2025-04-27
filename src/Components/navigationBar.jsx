

export default function NavigationBar()
{
    const handleNavigateClick = () => {
        console.log("Navigate");
    }
    const handleSocialsClick = () => {
        console.log("Socials");
    }
    const handleColorClick = () => {
        console.log("Color");
    }

    return(
        <div className="flex flex-row justify-between items-center h-[5vh] z-1000 absolute top-5 left-[40vw] gap-[5vw] border-black border-2 rounded-[40px] bg-white p-5">
            <button onClick={handleNavigateClick()}>Navigate</button>
            <button onClick={handleSocialsClick()}>Socials</button>
            <button onClick={handleColorClick()}>Color</button>
        </div>
    )
}