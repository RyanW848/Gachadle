import { useNavigate } from "react-router-dom";
import genshinImg from "../assets/icons/genshin.webp";
import hsrImg from "../assets/icons/hsr.webp";
import arknightsImg from "../assets/icons/arknights.png";

function Navbar() {
    const navigate = useNavigate();
    const games = [
        {
            name: "Genshin",
            img: genshinImg,
            path: "/genshin",
        },
        {
            name: "Star Rail",
            img: hsrImg,
            path: "/starrail",
        },
        {
            name: "Arknights",
            img: arknightsImg,
            path: "/arknights",
        },
    ];
    
    const back = () => {
        navigate("/")
    };

    const click = (game: any) => {
        navigate(game.path);
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand" onClick={back}>Gachadle</div>
                <ul className="navbar-nav me-auto">
                    {games.map((game) => (
                        <li className="nav-item" key={game.name} onClick={() => click(game)}>
                            <div className="nav-link">
                                <img
                                    src={game.img}
                                    alt={game.name}
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: "8px",
                                    }}
                                />
                                <div style={{fontSize: "16px", display: "inline-block"}}>{game.name}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
