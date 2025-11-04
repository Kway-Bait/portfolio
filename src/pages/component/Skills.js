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
        <div class="m-1 my-4 p-3 w-[50%] max-w-lg bg-bgclr-1 hover:bg-bgclr-2 rounded-xl border-2 border-cyan-300">
            <h1 class="p-1 text-xl font-bold">Skills & Tech-stacks</h1>
            {content.map(([title, lst]) => (
                <div class="p-1">
                    <h2 class="inline font-semibold">{title} </h2>
                    <ul class="inline-flex flex-wrap justify-start">
                        {lst.map(x => (
                            <li class="mx-1">{x}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;
