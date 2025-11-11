import Icon from "../utils/Icon.js";

function TimeLineCard({ experience, index, timelineColor }) {
    return (
        <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} my-8`} data-aos="fade-up">
            <div className="w-1/2 px-4">
                <div className="bg-bgclr-0 rounded-lg shadow-gray-600 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-12 h-12 rounded-full object-cover"
                            loading="lazy"
                        />

                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-txtclr">{experience.position}</h3>
                            <div className="flex items-center text-txtclr-muted">
                                <span>
                                    <Icon name="nf nf-md-office_building" className="text-blue-300"/> {experience.company}
                                </span>
                            </div>
                            <div className="flex items-center text-txtclr-muted">
                                <span>
                                    <Icon name="nf nf-fa-calendar" className="text-blue-300"/> {experience.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start">
                                <p className="text-txtclr">
                                    <Icon name="nf nf-fa-star" className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-lime-400" /> {achievement}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-10 flex justify-center">
                <div
                    className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
                    style={{ backgroundColor: timelineColor }}
                />
            </div>
            
            <div className="w-1/2" />
        </div>
    );
};

export default TimeLineCard;
