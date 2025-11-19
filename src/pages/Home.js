import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

import TextTile from './utils/TextTile.js';
import { Skills, FindMe, WorkExp, Education, Achievements, Projects } from './section';

function Home() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        ["home", "Home"],
        ["skill", "Skills"],
        ["workexp", "Experience"],
        ["project", "Projects"],
        ["education", "Edu"],
        ["achievement", "Achievements"],
    ];

    const NameTiles = () => {
        const surname = "YONG";
        const lastname = "KEWEI";
        return (
            <div className="inline">
                {surname.split('').map((c, id) => <span key={id}>{TextTile(c)}</span>)}
                {lastname.split('').map((c, id) => <span key={id}>{TextTile(c)}</span>)}
            </div>
        );
    }

    // TO ADD:
    // 1. My Passion, Work Ethic
    // 2. My Skills
    // 3. My Work Experience (A Timeline graphic) [DONE]
    // 4. My Latest Works
    // 5. My Achievements 
    // 6. Footer

    return (
        <div className="relative h-full pt-9 text-txtclr text-left">
            <div className="flex justify-center">
                <nav
                    className="fixed flex top-3 p-4 h-[5vh] justify-center items-center text-2xl rounded-3xl backdrop-blur-sm backdrop-brightness-75 hover:backdrop-blur-xl duration-300 text-txtclr-muted font-mono font-semibold z-20"
                >
                    <div>
                        {sections.map(([target, caption], idx) => (
                            <Link
                                key={idx}
                                className="my-auto mx-2 py-1 px-2 cursor-pointer hover:text-txtclr duration-300"
                                to={target}
                                smooth={true}
                                duration={700}
                                delay={150}
                            >
                                {caption}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <Element name="home">
                <section className="fixed px-[10%] inset-0 h-[105vh] bg-gradient-to-br from-black to-indigo-800">
                    <div className="fixed top-[5vh] w-full h-full overflow-hidden">
                        <div
                            className="relative inset-x-5 inset-y-1/4"
                            style={{
                                transform: `translateY(-${offsetY * 0.3}px)`,
                                transition: "transform 0.05s liner",
                            }}
                        >
                            <div className="m-2 flex">
                                <div className="flex flex-col">
                                    <div>
                                        <h1 className="my-2 text-7xl font-bold">Aloha!</h1>
                                        <h1 className="my-2 py-2 text-4xl font-semibold">I'm {NameTiles()}</h1>
                                    </div>
                                    <h2 className="my-2 py-2 text-3xl font-semibold">Software developer | Web, AI & More</h2>
                                </div>
                            </div>
                            <FindMe />
                        </div>
                    </div>
                </section>
            </Element>

            <div className="h-screen invisible" /> {/* Filler div */}

            <div className="relative py-20 px-[10%] m-auto w-[90%] min-h-full rounded-3xl bg-cover bg-gradient-to-br from-lime-200/30 to-cyan-200/30 backdrop-blur-lg backdrop-brightness-50">
                <Element name="skill">
                    <section className="relative text-txtclr">
                        <Skills />
                    </section>
                </Element>

                <Element name="workexp">
                    <section className="relative text-txtclr">
                        <WorkExp />
                    </section>
                </Element>

                <Element name="project">
                    <section className="relative text-txtclr">
                        <Projects />
                    </section>
                </Element>

                <Element name="education">
                    <section className="relative text-txtclr">
                        <Education />
                    </section>
                </Element>


                <Element name="achievement">
                    <section className="relative text-txtclr">
                        <Achievements />
                    </section>
                </Element>
            </div>
        </div>
    );
}

export default Home;
