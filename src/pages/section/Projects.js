import { useState } from 'react';
import ProjectCard from '../component/ProjectCard.js';
import { data } from '../data/ProjectsData.js';

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const len = data.length;

    function handleNext() {
        setActiveIndex(prev => (prev + 1) % len);
    }

    function handlePrev() {
        setActiveIndex(prev => (prev + len - 1) % len);
    }

    return (
        <div className="section-container">
            <h1 className="section-title mb-0">Projects</h1>
            <div className="flex justify-center h-[60vh] max-h-[30rem] gap-2">
                <div
                    className="text-2xl md:size-5 self-center rounded-full nf nf-fa-circle_chevron_left cursor-pointer"
                    onClick={() => handlePrev()}
                />
                <div className="p-2 w-[90%] flex justify-center items-center overflow-hidden">
                    {[...data, ...data, ...data].map((project, i) => {
                        let offset = len + (activeIndex - i);

                        return ProjectCard({ cardOffset: activeIndex, offset: offset, content: project });
                    })}
                </div>
                <div
                    className="text-2xl md:size-5 self-center rounded-full nf nf-fa-circle_chevron_right cursor-pointer"
                    onClick={() => handleNext()}
                />
            </div>
        </div>
    )
}

export default Projects;
