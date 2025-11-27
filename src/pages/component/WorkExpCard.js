import Icon from "../utils/Icon.js";

function WorkExpCard({ experience, index, cardColor }) {
    return (
        <div className={`md:flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} my-4 md:my-8`} data-aos="fade-up">
            <div className="w-full md:w-1/2 px-1 md:px-4">
                <div className="bg-bgclr-0 rounded-lg shadow-gray-600 shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <img
                            src={experience.logo}
                            alt={experience.company}
                            className="size-8 md:size-16 rounded-full object-cover"
                            loading="lazy"
                        />

                        <div className="ml-4">
                            <h3 className="text-md md:text-xl font-semibold text-txtclr">{experience.position}</h3>
                            <div className="flex items-center text-sm md:text-md text-txtclr-muted">
                                <span>
                                    <Icon name="nf nf-md-office_building" className="text-blue-300"/> {experience.company}
                                </span>
                            </div>
                            <div className="flex items-center text-sm md:text-md text-txtclr-muted">
                                <span>
                                    <Icon name="nf nf-fa-calendar" className="text-blue-300"/> {experience.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start">
                                <p className="text-sm md:text-md text-txtclr">
                                    <Icon name="nf nf-fa-star" className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-lime-400" /> {achievement}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span key={i} className="px-2 md:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-10 flex justify-center md-show">
                <div
                    className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
                    style={{ backgroundColor: cardColor }}
                />
            </div>
            
            <div className="w-1/2 md-show" />
        </div>
    );
};

export default WorkExpCard;
