import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

import TextTile from './component/TextTile.js';
import Skills from './component/Skills.js';
import FindMe from './component/FindMe.js';
import WorkExp from './component/WorkExp.js';

function Home() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    const CustomLink = ({ className, target, caption, hidden }) => (
        <Link
            className={`${className} my-auto mx-2 py-1 px-2 cursor-pointer ${hidden ? "invisible" : ""}`}
            to={target}
            smooth={true}
            duration={700}
            delay={150}
        >
            {caption}
        </Link>
    );

    const sections = [
        ["home", "Home"],
        ["skill_section", "Skills"],
        ["exp_section", "Experience"],
    ];

    const LinkTag = ({ sections, show_section, tag_class }) => {
        const showAll = show_section === undefined;
        return (
            <div className="min-w-min">
                {sections.map(([target, caption]) => {
                    const isHidden = !showAll && target !== show_section;

                    return (
                        <Tag disable={showAll || isHidden}>
                            <CustomLink
                                className={tag_class}
                                target={target}
                                caption={caption}
                                hidden={isHidden}
                            />
                        </Tag>
                    );
                })}
            </div>
        );
    }

    const Tag = ({ children, className="", disable }) => {
        if (disable) {
            return <span>{children}</span>;
        } else {
            return (
                <span className={className}>
                    {children}
                </span>
            );
        }
    }

    // TO ADD:
    // 1. My Passion, Work Ethic
    // 2. My Skills
    // 3. My Work Experience (A Timeline graphic) [DONE]
    // 4. My Latest Works
    // 5. My Achievements 
    // 6. Footer

    return (
        <div className="relative h-screen py-9 text-txtclr text-left">
            <nav className="fixed flex top-0 p-4 pr-5 h-[5vh] justify-start items-center text-2xl bg-transparent text-txtclr-muted font-mono font-semibold z-20">
                <LinkTag sections={sections} />
            </nav>

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

            <div className="h-screen" /> {/* Filler div */}

            <Element name="skill_section">
                <section className="relative top-0 min-h-screen z-15 text-txtclr bg-gradient-to-br from-black to-cyan-800">
                    <div className="sticky w-0 min-w-min flex top-0 p-4 pr-5 h-[5vh] justify-start items-center text-2xl text-txtclr-muted font-mono font-semibold z-0">
                        <LinkTag 
                            sections={sections} 
                            show_section="skill_section" 
                            tag_class="text-txtclr rounded-2xl" 
                            Wrapper={Tag({className:"inline bg-gradient-to-tr from-black to-cyan-800"})} 
                        />
                    </div>
                    <div className="relative top-0 z-10">
                        <div className="p-10 px-[10%]">
                            <Skills />
                        </div>
                    </div>
                </section>
            </Element>

            <Element name="exp_section">
                <section className="relative top-0 min-h-screen z-15 text-txtclr bg-gradient-to-br from-black to-lime-800">
                    <div className="sticky flex top-0 p-4 pr-5 h-[5vh] justify-start items-center text-2xl bg-transparent text-txtclr-muted font-mono font-semibold z-0">
                        <LinkTag 
                            sections={sections} 
                            show_section="exp_section" 
                            tag_class="text-txtclr rounded-2xl" 
                            wrapper={Tag} 
                        />
                    </div>
                    <div className="p-10 px-[10%]">
                        <WorkExp />
                    </div>
                </section>
            </Element>
        </div>
    );
}

export default Home;
