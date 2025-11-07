import TimeLine from "../component/TimeLine.js";

const edu = [
    {
        title: "University of Birmingham",
        subtitle: "(Birmingham, UK)",
        desc: <p>- Major in BSc Computer Science<br/>- First class in Year 1</p>,
        date: "Sep 2024 - Jun 2027",
        tags: []
    },
    {
        title: "Hin Hua High School",
        subtitle: "(Klang, Malaysia)",
        desc: "",
        date: "Jan 2018 - Dec 2023",
        tags: []
    },
]

function Education() {
    return (
        <div className="relative">
            <h1 className="section-title">Education</h1>
            {TimeLine(edu)}
        </div>
    );
}

export default Education;
