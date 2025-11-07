import TimeLineItem from './TimeLineItem.js';

function TimeLine(content) {
    return (
        <div>
            {content.map((data, id) => (
                <div key={id} className="mx-1 flex items-stretch justify-start">
                    <div className="relative mx-1 py-2 min-w-[14%] max-w-[14%] flex items-center justify-center">
                        <div className="absolute top-0 bottom-0 right-1/4 h-full w-[2px] bg-white -1/2 z-0" /> {/* TimeLine White Line */}
                        <div className="absolute right-1/4 translate-x-1/3 w-4 h-4 bg-white rounded-full" /> {/* TimeLine marker */}
                        <div className="py-1 pb-2 flex flex-col items-center rounded-3xl z-10" data-aos="fade-up">
                            <div className="px-2 font-semibold mix-blend-normal">{data.date}</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {TimeLineItem({ data })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimeLine;
