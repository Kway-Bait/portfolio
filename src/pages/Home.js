import { useState, useEffect } from 'react';

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

    // TO ADD:
    // 1. My Passion, Work Ethic
    // 2. My Skills
    // 3. My Work Experience (A Timeline graphic) [DONE]
    // 4. My Latest Works
    // 5. My Achievements 
    // 6. Footer

    return (
        <div className="relative h-screen py-9 text-txtclr text-left">
            <section 
                className="fixed px-[10%] inset-0 h-screen bg-gradient-to-br from-black to-indigo-800"
                style={{
                    transform: `translateY(-${offsetY * 0.2}px)`,
                    transition: "transform 0.05s liner",
                }}
            >
                <div className="m-2 mt-[10%] py-1 flex">
                    <div className="flex flex-col">
                        <div>
                            <h1 className="my-2 text-7xl font-bold">Aloha!</h1>
                            <h1 className="my-2 py-2 text-4xl font-semibold">I'm {NameTiles()}</h1>
                        </div>
                        <h2 className="my-2 py-2 text-3xl font-semibold">Software developer | Web, AI & More</h2>
                    </div>
                </div>
                <FindMe />
            </section>

            <section className="relative z-10 px-[10%] mt-[100vh] bg-bgclr-0 text-txtclr">
                <div className="p-10">
                    <Skills />
                    <WorkExp />
                    <Skills />
                    <Skills />
                    <Skills />
                </div>
            </section>
        </div>
    );
}

export default Home;
