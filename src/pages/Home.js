import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

import TextTile from './utils/TextTile.js';
import { About, Skills, FindMe, WorkExp, Projects, Education, Achievement, Footer } from './section';

// TODO: Make Responsive [Done]
// TODO: Populate Data [Done]
// TODO: Add Image
// TODO: Add Easter Eggs

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
        {
            link: "achievement",
            title: "Achievement",
            content: <Achievement />
        }
    ];

    const NameTiles = () => {
        const surname = "YONG";
        const lastname = "KEWEI";
        return (
            <div className="inline-flex flex-wrap">
                {surname.split('').map((c, id) => <span key={id}>{TextTile(c)}</span>)}
                {lastname.split('').map((c, id) => <span key={id}>{TextTile(c)}</span>)}
            </div>
        );
    }

    return (
        <div className="relative h-full text-txtclr text-left pt-9 bg-scroll bg-gradient-to-br from-black to-indigo-800 overflow-hidden">
            <div className="flex justify-center">
                <nav
                    className="fixed top-[2vh] flex flex-wrap mx-3 px-4 min-h-[5vh] justify-center items-center text-md md:text-2xl rounded-3xl backdrop-blur-sm backdrop-brightness-75 hover:backdrop-blur-xl duration-300 text-txtclr-muted font-mono font-semibold z-20"
                >
                    {sections.map((section, idx) => (
                        <Link
                            key={idx}
                            className="mx-2 py-1 px-1 md:px-2 cursor-pointer hover:text-txtclr duration-300"
                            to={section.link}
                            smooth={true}
                            duration={700}
                            delay={150}
                            offset={-50}
                        >
                            {section.title}
                        </Link>
                    ))}
                </nav>
            </div>

            <Element name="home">
                <section className="fixed top-[4vh] px-[3%] md:px-[8%] w-[90vw] h-screen overflow-hidden">
                    <div
                        className="relative inset-x-3 md:inset-x-5 inset-y-1/4"
                        style={{
                            transform: `translateY(-${offsetY * 0.3}px)`,
                            transition: "transform 0.05s liner",
                        }}
                    >
                        <div className="m-2 flex">
                            <div className="flex flex-col">
                                <div>
                                    <h1 className="my-2 text-4xl md:text-7xl font-bold fascinate-regular">Aloha!</h1>
                                    <div className="my-2 py-2 text-lg md:text-4xl font-semibold">I'm {NameTiles()}</div>
                                </div>
                                <h2 className="my-2 vt323-regular text-cyan-200 text-xl md:text-5xl font-semibold">Software developer | Web, AI & More</h2>
                            </div>
                        </div>
                        <FindMe />
                    </div>
                </section>
            </Element>

            <div className="h-screen invisible" /> {/* Filler div */}

            <div className="relative py-10 md:py-20 md:px-[5%] mx-auto w-[95%] md:w-[85%] min-h-full rounded-3xl bg-gradient-to-br from-lime-200/30 to-cyan-200/30 backdrop-blur-lg backdrop-brightness-50">
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
