const time_line_item = (
    "m-1 my-5 p-3 inline-flex rounded-2xl border-2"
)

const time_line_content = (
    "p-1 text-txtclr"
)

const tag_class = (
    "mx-1 px-3 bg-bgclr-2 hover:bg-bgclr-3 rounded-2xl cursor-default"
)

function TimeLineItem({ data }) {
    return (
        <div className={time_line_item} data-aos="fade-up">
            <div className={time_line_content}>
                <h1 className="inline mx-1 text-2xl font-bold">{data.title}</h1>
                <h2 className="inline mx-1 text-xl font-semibold text-txtclr-muted">{data.subtitle}</h2>
                <p className="m-1 my-2 text-lg text-txtclr-muted">{data.desc}</p>
                {data.tags.map((tag, id) => (
                    <div key={id}>
                        <h3 className="inline mx-1 font-semibold">{tag.title}:</h3>
                        {tag.content.map((p, id1) => (
                            <span className={tag_class} key={id1}>{p}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeLineItem;
