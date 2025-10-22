import TextTile from './component/TextTile.js'

function Home() {

    const surname = "YONG";
    const lastname = "KEWEI";

    const NameTiles = () => {
        return (
            <div class="inline">
                {surname.split('').map(c => TextTile(c))}
                {lastname.split('').map(c => TextTile(c))}
            </div>
        );
    }

    return (
        <div class="m-5 min-h-screen py-9 px-[10%] text-txtclr text-left">
            <h1 class="text-7xl font-bold">Hi!</h1>
            <h1 class="my-4 text-4xl font-semibold">I'm {NameTiles()}</h1>

        </div>
    );
}

export default Home;
