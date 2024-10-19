import "../App.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const games = [
        {
            name: "Genshin",
            img: "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Genshin_Impact.png/",
            path: "/genshin",
        },
        {
            name: "Star Rail",
            img: "https://static.wikia.nocookie.net/houkai-star-rail/images/8/84/Honkai_Star_Rail_App.png/",
            path: "/starrail",
        },
        {
            name: "Arknights",
            img: "https://play-lh.googleusercontent.com/D4DUUFQDCsH9NIEa8hjMjQSWdtNhGX1Fd_jT-23ogAb5uMMqttqQDUJcUt4K_u8RYOQ",
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
