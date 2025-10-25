import TextTile from './component/TextTile.js'

function Home() {

    const NameTiles = () => {
        const surname = "YONG";
        const lastname = "KEWEI";
        return (
            <div class="inline">
                {surname.split('').map(c => TextTile(c))}
                {lastname.split('').map(c => TextTile(c))}
            </div>
        );
    }

    const Languages = () => {
        const content = [
            ["Languages:", [
                "Python",
                "C++",
                "C#",
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
            ]],
            ["Skills:", [
                "ASP.NET",
                "React.js",
            ]]
        ];

        return (
            <div class="m-1 p-3 w-[50%] max-w-lg bg-bgclr-2 rounded-xl border-cyan-300 border-2">
                <h1 class="p-1 text-xl font-bold">Skills & Tech-stacks</h1>
                {content.map(([title, lst]) => (
                    <div class="p-1">
                        <h2 class="inline font-semibold">{title}</h2>
                        <ul class="inline-flex flex-wrap justify-start">
                            {lst.map(x => (
                                <li class="mx-1">{x}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div class="m-5 min-h-screen py-9 px-[10%] text-txtclr text-left">
            <h1 class="m-2 text-7xl font-bold">Hi!</h1>
            <h1 class="my-2 py-2 text-4xl font-semibold">I'm {NameTiles()}</h1>
            <h2 class="my-2 py-2 text-3xl font-semibold">Software developer | Web, AI & More</h2>
            {Languages()}
        </div>
    );
}

export default Home;
