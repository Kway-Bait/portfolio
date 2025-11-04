import TextTile from './component/TextTile.js';
import Skills from './component/Skills.js';
import FindMe from './component/FindMe.js';
import WorkExp from './component/WorkExp.js';

function Home() {

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
    // 3. My Work Experience (A Timeline graphic)
    // 4. My Latest Works
    // 5. 

    return (
        <div className="m-5 min-h-screen py-9 px-[10%] text-txtclr text-left">
            <h1 className="m-2 text-7xl font-bold">Hi!</h1>
            <h1 className="my-2 py-2 text-4xl font-semibold">I'm {NameTiles()}</h1>
            <h2 className="my-2 py-2 text-3xl font-semibold">Software developer | Web, AI & More</h2>
            {/* <FindMe /> */}
            {/* <Skills /> */}
            <WorkExp />
        </div>
    );
}

export default Home;
