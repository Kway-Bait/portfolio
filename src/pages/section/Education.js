import Icon from "../utils/Icon.js";
import { data } from "../data/EducationData.js";

function Education() {
    return (
        <div className="relative section-container">
            <h1 className="section-title">Education</h1>
            <ul className="m-2">
                {data.map((content, id) => (
                    <li
                        key={id}
                        className="flex m-2 p-4 rounded-xl backdrop-blur-xl backdrop-brightness-75"
                        data-aos="fade-left"
                    >
                        <Icon name="m-3 nf nf-md-school text-blue-400" className="text-md md:text-2xl"/>
                        <div>
                            <h1 className="inline text-lg md:text-2xl font-bold">{content.title}</h1>
                            <h2 className="mx-2 md:inline text-base md:text-xl text-txtclr-muted">{content.subtitle}</h2>
                            <strong className="text-sm md:text-base font-semibold">{content.date}</strong>
                            <ul>
                                {content.desc.map((txt, idx) => (
                                    <li key={idx} className="text-gray-200 text-sm md:text-base">
                                        <Icon name="m-1 text-lime-300 nf nf-fa-circle_chevron_right" /> {txt}
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
