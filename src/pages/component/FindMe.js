const contact_button_class = (
    "mx-1 px-3 bg-bgclr-2 hover:bg-bgclr-3 rounded-2xl"
)

function FindMe() {
    const links = [
        ["LinkedIn", "https://linkedin.com/in/kwyong05"],
        ["Github", "https://github.com/Kway-Bait"],
    ];

    return (
        <div className="m-1 my-4 p-3 rounded-lg min-w-max w-3 bg-transparent">
            <h2 className="inline text-lg font-semibold">Find me at: </h2>
            <div className="inline-flex flex-wrap justify-start">
                {links.map(([name, link]) => (
                    <a 
                        className={contact_button_class} 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FindMe;
