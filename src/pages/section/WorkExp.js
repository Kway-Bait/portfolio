import { useState, useEffect } from 'react';
import TimeLineCard from "../component/TimeLineCard.js";
import acceler_logo from "../../assets/ACCELER_LOGO.png";

const experiences = [
    {
        id: 1,
        company: "AccelerTechnology (Remote Startup)",
        logo: acceler_logo,
        position: "AI & Full Stack Web Developer",
        duration: "Jan 2025 - Present",
        achievements: [
            "Led development of fast-paced startup",
            "Improve model accuracy to 85%",
            "Implemented CI/CD pipeline",
        ],
        skills: ["Node.js", "React", "Vercel", "Azure", "Docker"]
    },
    {
        id: 2,
        company: "Autocount Sdn. Bhd.",
        logo: "https://payrecon.my/wp-content/uploads/2021/08/autocount_logo_2.png",
        position: "Web Developer Internship",
        duration: "Mar 2024 - July 2024",
        achievements: [
            "Implemented 15+ features",
            "Developed enterprise-level applications",
        ],
        skills: ["ASP.NET", "React", "MySQL"]
    }
]

function WorkExp() {
    const [color, setColor] = useState("rgb(239, 68, 68)");

    useEffect(() => {
        const interval = setInterval(() => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            setColor(`rgb(${r}, ${g}, ${b})`);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="m-2 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="section-title text-center">
                    Professional Experience
                </h1>
                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out"
                        style={{ backgroundColor: color }}
                    />

                    <div className="h-1" />

                    {/* Experience Card */}
                    {experiences.map((experience, index) => (
                        <TimeLineCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                            timelineColor={color}
                        />
                    ))}

                    <div className="h-1" />
                    <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full transition-colors duration-1000 easn-in-out" style={{ backgroundColor: color }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExp;
