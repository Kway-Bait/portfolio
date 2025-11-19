import Icon from '../utils/Icon.js';

function Skills() {
    const content = [
        // Programming Langauges
        ["Languages:", [
            ["Python", "nf nf-fa-python", "text-yellow-300"],
            ["C++", "nf nf-custom-cpp", "text-purple-300"],
            ["C#", "nf nf-dev-csharp", "text-green-300"],
            ["HTML", "nf nf-dev-html5", "text-red-300"],
            ["CSS", "nf nf-dev-css3", "text-blue-300"],
            ["JavaScript", "nf nf-dev-javascript", "text-yellow-300"],
            ["TypeScript", "nf nf-dev-typescript", "text-blue-300"],
            ["Bash", "nf nf-dev-bash"],
        ]],
        // Frameworks, tools
        ["Frameworks:", [
            ["ASP.NET", "nf nf-md-dot_net", "text-purple-400"],
            ["React.js", "nf nf-dev-react", "text-blue-200"],
            ["Flask", "nf nf-dev-flask", "text-white"],
        ]],
        ["Databases & Tools:", [
            ["MySQL", "nf nf-dev-mysql", "text-blue-300"],
            ["PostgreSQL", "nf nf-dev-postgresql", "text-blue-300"],
            ["Postman", "nf nf-dev-postman", "text-orange-300"]
        ]],
        ["CI/CD:", [
            ["Docker", "nf nf-dev-docker", "text-blue-400"],
            ["Microsoft Azure", "nf nf-dev-azure", "text-blue-400"],
            ["Vercel", "nf nf-dev-vercel", ""],
        ]],
        ["Other Skills:", [
            ["UNIX/Linux", "nf nf-dev-linux", "text-yellow-400"],
            ["Git", "nf nf-dev-git", "text-orange-300"],
            ["REST APIs", ""],
        ]],
    ];

    return (
        <div className="relative section-container">
            <h1 className="section-title">Skills & Tech-stacks</h1>
            <div className="m-3">
                {content.map(([title, lst], idx) => (
                    <div key={idx} className="p-1">
                        <h2 className="ml-4 inline text-xl font-semibold text-cyan-400">{title} </h2>
                        <ul className="inline-flex flex-wrap justify-start">
                            {lst.map(([name, icon, className], id) => (
                                <li key={id} className="mx-1 px-1 text-lg">
                                    {<Icon className={className} name={icon} />} {name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
