import TimeLineItem from './TimeLineItem.js';

function TimeLine(content) {
    return (
        <div>
            {content.map((data, id) => (
                <div key={id} className="mx-1 flex items-stretch justify-start">
                    <div className="relative mx-1 py-2 min-w-[14%] max-w-[14%] flex items-center justify-center">
                        <div className="absolute top-0 bottom-0 left-1/2 h-full w-[2px] bg-white -translate-x-1/2 z-0" /> {/* TimeLine White Line */}
                        <div className="py-1 pb-2 flex flex-col items-center bg-bgclr-0 z-10">
                            <div className="m-2 p-2 w-4 h-4 bg-white rounded-full" /> {/* TimeLine marker */}
                            <div className="font-semibold">{data.date}</div>
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
