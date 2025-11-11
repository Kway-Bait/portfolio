import { useState } from 'react';

const wrapperClassBase = (
    "inline-flex z-10 m-1 w-12 h-12 text-black text-center align-middle justify-center rounded-lg border-black border-3 shadow-2xl select-none cursor-pointer duration-200"
);

const shadowClass = (
    "absolute w-12 h-12 bg-gray-600 rounded-lg translate-y-2 shadow-lg"
);

const colors = [
    "bg-white hover:bg-gray-200",
    "bg-pink-200 hover:bg-pink-300",
    "bg-yellow-200 hover:bg-yellow-300",
    "bg-blue-200 hover:bg-blue-300",
    "bg-green-200 hover:bg-green-300",
    "bg-violet-200 hover:bg-violet-300",
    "bg-red-200 hover:bg-red-300"
];

function TextTile(text) {
    let [tileColor, setTileColor] = useState(Math.floor(Math.random() * colors.length));
    let [isClicked, setIsClicked] = useState(Math.floor(Math.random() * 2));

    const wrapperClass = `
        ${wrapperClassBase} 
        ${colors[tileColor]}
        ${isClicked ? 'transform translate-y-1' : ''}
    `;

    const handleTileClicked = () => {
        setTileColor((tileColor + 1) % (colors.length));
        setIsClicked(!isClicked);
    }

    return (
        <div className="inline-flex justify-center items-center">
            <div
                className={wrapperClass}
                onClick={() => handleTileClicked()}
            >
                {text}
            </div>

            <div className={shadowClass} />
        </div>
    );
}

export default TextTile;
