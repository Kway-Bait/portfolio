import { useState } from 'react';
import Icon from '../utils/Icon.js';

const projects = [
    {
        title: "MathMaze",
        subtitle: "A Zork-style game with a math twist!",
        desc: [
            "Text-based game",
        ],
        tags: ["Java", "OOP"],
        style: {
            card: ""
        },
        github_link: "https://github.com/Kway-Bait/MathMaze",
        image_url: "data:image/jpeg;base64,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",
    },
    {
        title: "Bookads",
        subtitle: "A Book Trading Website",
        desc: [
            "Full stack development",
        ],
        tags: ["ASP.NET", "MySQL", "React"],
        style: {
            card: ""
        },
        github_link: "https://github.com/Kway-Bait/Bookads",
        image_url: "",
    },
    {
        title: "TBA",
        desc: [
            "TBA"
        ],
        tags: [],
        style: {
            card: "",
        },
        github_link: "",
        image_url: "",
    }
]

function Projects() {
    const [activeIndex, setActiveIndex] = useState(1);

    const CarouselCard = ({ key, className, content }) => {
        return (
            <div key={key} className={`${className} ${content.style.card}`}>
                <div className="m-2 h-[25%]">
                    <img
                        src={content.image_url}
                        className="w-full h-full object-cover rounded-2xl"
                        alt=""
                    />
                </div>

                <div className="ml-4 m-2">
                    <h1 className="inline text-txtclr text-3xl font-mono font-bold">{content.title}</h1>
                    <a 
                        className="mx-3 p-1 px-3 font-semibold bg-bgclr-3 hover:bg-bgclr-3 rounded-2xl"
                        href={content.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name="nf nf-dev-github"/> Github
                    </a>
                    <h2 className="text-txtclr-muted text-lg font-semibold">{content.subtitle}</h2>
                </div>

                <div className="ml-4 m-2 space-y-2">
                    {content.desc.map((d, i) => (
                        <div key={i} className="flex items-start">
                            <p className="text-txtclr">
                                <Icon name="nf nf-md-send" className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-pink-400" /> {d}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ml-4 mt-4 m-2 flex flex-wrap gap-2">
                    {content.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="section-container">
            <h1 className="section-title">Projects</h1>
            <div className="flex justify-center h-[50vh] border-2">
                {projects.map((p, idx) => (
                    <CarouselCard
                        key={idx}
                        className="m-2 p-2 w-[30%] rounded-2xl bg-bgclr-0"
                        content={p}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;
