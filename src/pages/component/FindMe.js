const contact_button_class = (
    "mx-1 px-3 bg-bgclr-2 hover:bg-bgclr-3 rounded-2xl"
)

function FindMe() {
    const links = [
        ["LinkedIn", "https://linkedin.com/in/kwyong05"],
        ["Github", "https://github.com/Kway-Bait"],
    ];

    return (
        <div class="my-4 p-3 rounded-lg border-2 border-indigo-300">
            <h2 class="inline text-lg font-semibold">Find me at: </h2>
            <div class="inline-flex flex-wrap justify-start">
                {links.map(([name, link]) => (
                    <a 
                        class={contact_button_class} 
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
