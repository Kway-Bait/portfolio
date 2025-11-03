const time_line_item = (
    "m-2 p-2 rounded-2xl border-2 border-gray-500"
)

const time_line_content = (
    "p-1 text-txtclr"
)

const tag_class = (
    "mx-1 px-3 bg-bgclr-2 hover:bg-bgclr-3 rounded-2xl"
)

function TimeLineItem({ data }) {
    return (
        <div class={time_line_item}>
            <div class={time_line_content}>
                <h1 class="inline mx-1 text-2xl font-bold">{data.title}</h1>
                <h2 class="inline mx-1 text-xl font-semibold text-txtclr-muted">{data.subtitle}</h2>
                <p class="m-1 my-2 text-lg text-txtclr-muted">{data.desc}</p>
                {data.tags.map((tag, id) => (
                    <div key={id}>
                        <h3 class="inline mx-1 font-semibold">{tag.title}:</h3>
                        {tag.content.map((p, id1) => (
                            <span class={tag_class} key={id1}>{p}</span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeLineItem;
