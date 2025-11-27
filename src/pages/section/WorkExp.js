import { useState, useEffect } from 'react';
import WorkExpCard from '../component/WorkExpCard.js';

import { data } from '../data/WorkExpData.js';

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
        <div className="section-container">
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
                    {data.map((experience, index) => (
                        <WorkExpCard
                            key={experience.id}
                            experience={experience}
                            index={index}
                            cardColor={color}
                        />
                    ))}

                    <div className="h-1" />
                    <div className="flex justify-center">
                        <div 
                            className="w-8 h-8 rounded-full transition-colors duration-1000 easn-in-out" 
                            style={{ backgroundColor: color }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExp;
