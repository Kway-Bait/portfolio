import Icon from "../utils/Icon.js";

const edu = [
    {
        title: "University of Birmingham",
        subtitle: "(Birmingham, UK)",
        desc: [
            "BSc Computer Science, specializing in software engineering and data systems",
            "Achieved First-Class Honours in Year 1, excelling in OOP and algorithms"
        ], 
        date: "Sep 2024 - Jun 2027",
    },
    {
        title: "Hin Hua High School",
        subtitle: "(Klang, Malaysia)",
        desc: [
            "Graduated among top 3 students in the cohort"
        ],
        date: "Jan 2018 - Dec 2023",
    },
]

function Education() {
    return (
        <div className="relative section-container">
            <h1 className="section-title">Education</h1>
            <ul className="m-2">
                {edu.map((content, id) => (
                    <li key={id} className="flex m-2 p-4 rounded-xl backdrop-blur-xl backdrop-brightness-75">
                        <Icon name="m-3 nf nf-md-school text-2xl text-blue-400" />
                        <div>
                            <h1 className="inline text-2xl font-bold">{content.title}</h1>
                            <h2 className="mx-2 inline text-xl text-txtclr-muted">{content.subtitle}</h2>
                            <strong className="font-semibold">{content.date}</strong>
                            <ul>
                                {content.desc.map((txt, idx) => (
                                    <li key={idx} className="text-gray-200">
                                        <Icon name="m-1 text-lg text-lime-300 nf nf-fa-circle_chevron_right" /> {txt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Education;
