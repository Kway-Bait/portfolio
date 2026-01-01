import Icon from "../utils/Icon.js";
import { data } from "../data/AchievementData.js";
import Link from "../utils/Link.js";

function Achievement() {
    // Three achievements per row
    const chunkSize = 3;
    let dataChunks = [];
    for (let i = 0; i < data.length; i += chunkSize){
        dataChunks.push(data.slice(i, i + chunkSize));
    }

    return (
        <div className="relative section-container">
            <h1 className="section-title">Achievement</h1>
            {dataChunks.map((chunk, i) => (
                <ul 
                    key={i}
                    className="flex m-2"
                >
                    {chunk.map((content, id) => (
                        <li 
                            key={id}
                            className="m-2 p-4 bg-gradient-to-br from-yellow-800/50 to-indigo-800/50 shadow-xl hover:shadow-gray-700 hover:-translate-y-1 duration-300 rounded-2xl"
                        >
                            <div className="mx-2 flex items-center gap-3">
                                <Icon name="nf nf-fa-trophy text-yellow-400 shadow-lg" />
                                <div>
                                    <h1 className="text-xl font-bold">
                                        {content.title}
                                        {content.link && 
                                            <Link 
                                                className="mx-1"
                                                href={content.link}
                                                newTab={true}
                                            >
                                                <Icon name="nf nf-fa-link text-blue-400" />
                                            </Link>
                                        }
                                    </h1>
                                    <h2 className="text-txtclr-muted">{content.subtitle}</h2>
                                </div>
                            </div>
                            <p className="m-1 p-1 italic">{content.desc}</p>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default Achievement;
