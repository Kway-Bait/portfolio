import mathmaze from '../../assets/mathmaze.png';
import bookads from '../../assets/bookads.png';

export const data = [
    {
        title: "MathMaze",
        subtitle: "A Zork-style game with a math twist!",
        desc: [
            "Developed using Java for Object-Oriented Programming course",
            "Replayable with randomized elements for unique gameplay each time",
            "Simple command-line interface with no advanced setup required"
        ],
        tags: ["Java", "OOP"],
        style: {
            card: ""
        },
        github_link: "https://github.com/Kway-Bait/MathMaze",
        image_url: mathmaze,
    }
    ,
    {
        title: "Bookads",
        subtitle: "A Book Trading Platform for the Convenience of the School Community",
        desc: [
            "Full stack development using ASP.NET Core & React",
            "Secure user authentication with ASP.NET Identity",
            "Database management with SQL Server",
            "Responsive frontend and seamless user experience"
        ],
        tags: ["ASP.NET", "React", "SQL Server", "Authentication"],
        style: {
            card: ""
        },
        github_link: "https://github.com/Kway-Bait/Bookads",
        image_url: bookads,
    }
    ,
    {
        title: "TBA",
        desc: [
            "TBA"
        ],
        tags: [],
        style: {
            card: "",
        },
        github_link: "",
        image_url: null,
    },
]

