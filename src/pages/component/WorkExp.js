import TimeLine from "../utils/TimeLine.js";

const work_exp = [
    {
        title: "AI & Full Stack Web Developer",
        subtitle: "AccelerTechnology (Remote Startup)",
        desc: "Collaborated in fast-paced startup",
        date: "Jan 2025 - Present",
        tags: [
            {
                title: "Skills",
                content: ["Node.js", "PostgreSQL", "Vercel", "Microsoft Azure", "Docker"]
            }
        ]
    },
    {
        title: "Web Developer Internship",
        subtitle: "Autocount Sdn. Bhd.",
        desc: "Developed 10+ features.",
        date: "Mar 2024 - July 2024",
        tags: [
            {
                title: "Skills",
                content: ["ASP.NET", "EF Core", "REST APIs", "MySQL", "Git", "React", "JavaScript", "HTML/CSS", "C#"]
            }
        ]
    },
]

function WorkExp() {
    return (
        <div>
            <h1 className="section-title">My Work Experience</h1>
            {TimeLine(work_exp)}
        </div>
    );
}

export default WorkExp;
