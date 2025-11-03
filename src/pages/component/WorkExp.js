import TimeLineItem from "../utils/TimeLineItem.js";

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
            {work_exp.map((data, id) => <div key={id}>{TimeLineItem({data})}</div>)}
        </div>
    );
}

export default WorkExp;
