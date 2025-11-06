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
        ["Frameworks:", [
            "ASP.NET",
            "React.js",
            "Flask",
        ]]
        // TODO: Populate (can refer to resume)
    ];

    return (
        <div className="relative">
            <h1 className="section-title">My Skills & Tech-stacks</h1>
            <div className="m-3">
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
        </div>
    );
}

export default Skills;
