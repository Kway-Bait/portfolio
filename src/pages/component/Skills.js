function Skills() {
    const content = [
        // Programming Langauges
        ["Languages:", [
            "Python",
            "C++",
            "C#",
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
        ]],
        // Frameworks, tools
        ["Skills:", [
            "ASP.NET",
            "React.js",
        ]]
        // TODO: Populate (can refer to resume)
    ];

    return (
        <div className="m-1 my-4 p-3 w-[50%] max-w-lg bg-bgclr-1 hover:bg-bgclr-2 rounded-xl border-2 border-cyan-300">
            <h1 className="p-1 text-xl font-bold">Skills & Tech-stacks</h1>
            {content.map(([title, lst]) => (
                <div className="p-1">
                    <h2 className="inline font-semibold">{title} </h2>
                    <ul className="inline-flex flex-wrap justify-start">
                        {lst.map(x => (
                            <li className="mx-1">{x}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;
