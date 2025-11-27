import { useRef, useEffect, useState } from 'react';
import Icon from '../utils/Icon.js';

function ProjectCard({ cardOffset, offset, content, animationDuration = '150ms' }) {
    const [px, setPx] = useState(0.5);
    const [py, setPy] = useState(0.5);
    const ref = useRef(null);

    const active = (offset === 0) ? true : null;
    const dir = (offset === 0) ? 0 : (offset > 0) ? 1 : -1;
    const outside = Math.abs(offset) > 1;

    useEffect(() => {
        if (!ref.current) return;
        const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined,
        };

        let el = ref.current;

        const handleEnterEvent = () => {
            el.style.transition = `transform ${animationDuration} ease-out`;
        }

        const handleMoveEvent = (e) => {
            e.preventDefault();

            if (!el) {
                return;
            }

            state.rect = el.getBoundingClientRect();
            state.mouseX = unify(e).clientX;
            state.mouseY = unify(e).clientY;

            const tpx = (state.mouseX - state.rect.left) / state.rect.width;
            const tpy = (state.mouseY - state.rect.top) / state.rect.height;

            setPx(tpx.toFixed(2));
            setPy(tpy.toFixed(2));
        };

        const handleEndEvent = () => {
            setPx(0.5);
            setPy(0.5);
            el.style.transition = `transform ${animationDuration} ease-in`;
        };

        el.addEventListener('mouseenter', handleEnterEvent);
        el.addEventListener('mousemove', handleMoveEvent);
        el.addEventListener('mouseleave', handleEndEvent);
        el.addEventListener('touchenter', handleEnterEvent);
        el.addEventListener('touchmove', handleMoveEvent);
        el.addEventListener('touchend', handleEndEvent);

        return () => {
            el.removeEventListener('mouseenter', handleEnterEvent)
            el.removeEventListener('mousemove', handleMoveEvent);
            el.removeEventListener('mouseleave', handleEndEvent);
            el.removeEventListener('touchenter', handleEnterEvent)
            el.removeEventListener('touchmove', handleMoveEvent);
            el.removeEventListener('touchend', handleEndEvent);
        };
    }, [animationDuration]);

    const innerClass = (active) ? "" : "";
    const wrapperClass = (active) ? "opacity-100" : `${(outside)? "opacity-0" : "opacity-70"} blur-[2px] brightness-75`;

    const containerTransform = `perspective(1000px) translateX(${-100 * cardOffset + 100}%)`;
    const wrapperTransform = `perspective(1000px) rotateY(${35 * dir}deg)`;
    const innerTransform = `perspective(1000px) ${active ? `rotateY(${45 * (px - 0.5)}deg) rotateX(${-45 * (py - 0.5)}deg)` : ""}`;

    return (
        <section
            className={`h-[90%] min-w-[15rem] w-1/3 flex-none transition-all duration-1000 ease-in-out`}
            style={{ 'transform': containerTransform }}
        >
            <div
                className={`h-full transition-all duration-1000 ease-in-out ${wrapperClass}`}
                style={{ 'transform': wrapperTransform }}
            >
                <div
                    ref={ref}
                    className={`p-2 h-full rounded-2xl bg-bgclr-1 ${innerClass}`}
                    style={{
                        'transform-style': 'preserve-3d',
                        'transform': innerTransform,
                    }}
                >
                    <div className="m-2 h-[25%]">
                        <img
                            src={content.image_url}
                            className="w-full h-full object-cover object-center rounded-2xl"
                            alt=""
                        />
                    </div>

                    <div className="mx-4 m-2">
                        <h1 className="inline text-txtclr text-xl md:text-3xl font-mono font-bold">{content.title}</h1>
                        <a
                            className="m-2 p-1 rounded-full bg-bgclr-1"
                            href={content.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name="nf nf-dev-github" />
                        </a>
                        <h2 className="text-txtclr-muted text-sm md:text-lg font-semibold">{content.subtitle}</h2>
                    </div>

                    <div className="ml-4 m-2 space-y-2">
                        {content.desc.map((d, i) => (
                            <div key={i} className="flex items-start">
                                <p className="text-sm md:text-base text-txtclr">
                                    <Icon name="nf nf-md-send" className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-pink-400" /> {d}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-4 mt-4 flex flex-wrap gap-2">
                        {content.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 md:px-3 py-[0.12rem] md:py-1 bg-lime-100 text-lime-700 rounded-full text-xs md:text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectCard;
