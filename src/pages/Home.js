import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

import TextTile from './utils/TextTile.js';
import { About, Skills, FindMe, WorkExp, Projects, Education, Footer} from './section';

function Home() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        {
            link: "home",
            title: "Home",
        },
        {
            link: "about",
            title: "About",
            content: <About />,
        },
        {
            link: "skill",
            title: "Skills",
            content: <Skills />
        },
        {
            link: "workexp",
            title: "Experience",
            content: <WorkExp />
        },
        {
            link: "project",
            title: "Projects",
            content: <Projects />
        },
        {
            link: "education",
            title: "Education",
            content: <Education />
        },
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
    // 2. My Skills [DONE]
    // 3. My Work Experience (A Timeline graphic) [DONE]
    // 4. My Latest Works [DONE]
    // 6. Footer

    return (
        <div className="relative h-full pt-9 text-txtclr text-left bg-scroll bg-gradient-to-br from-black to-indigo-800">
            <div className="flex justify-center">
                <nav
                    className="fixed flex top-3 p-4 h-[5vh] justify-center items-center text-2xl rounded-3xl backdrop-blur-sm backdrop-brightness-75 hover:backdrop-blur-xl duration-300 text-txtclr-muted font-mono font-semibold z-20"
                >
                    <div>
                        {sections.map((section, idx) => (
                            <Link
                                key={idx}
                                className="my-auto mx-2 py-1 px-2 cursor-pointer hover:text-txtclr duration-300"
                                to={section.link}
                                smooth={true}
                                duration={700}
                                delay={150}
                                offset={-50}
                            >
                                {section.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>

            <Element name="home">
                <section className="absolute px-[10%] inset-0 h-full">
                    <div className="fixed top-[4vh] w-full h-screen overflow-hidden">
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
                                        <h1 className="my-2 text-7xl font-bold fascinate-regular">Aloha!</h1>
                                        <h1 className="my-2 py-2 text-4xl font-semibold">I'm {NameTiles()}</h1>
                                    </div>
                                    <h2 className="my-2 py-2 vt323-regular text-cyan-200 text-5xl font-semibold">Software developer | Web, AI & More</h2>
                                </div>
                            </div>
                            <FindMe />
                        </div>
                    </div>
                </section>
            </Element>

            <div className="h-screen invisible" /> {/* Filler div */}

            <div className="relative py-20 px-[10%] mx-auto w-[90%] min-h-full rounded-3xl bg-cover bg-gradient-to-br from-lime-200/30 to-cyan-200/30 backdrop-blur-lg backdrop-brightness-50">
                {sections.slice(1).map((section, index) => (
                    <Element key={index} name={section.link}>
                        <section className="relative text-txtclr">
                            {section.content}
                        </section>
                    </Element>
                ))}
            </div>

            <footer className="mt-24 py-10 px-6 w-full text-center text-txtclr-muted bg-black/30 backdrop-blur-xl backdrop-brightness-50 border-t border-white/10">
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
