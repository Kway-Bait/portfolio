import Icon from '../utils/Icon.js';
import { data } from '../data/SkillsData.js';

function Skills() {
    return (
        <div className="relative section-container">
            <h1 className="section-title">Skills & Tech-stacks</h1>
            <div className="m-3">
                {data.map(([title, lst], idx) => (
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
