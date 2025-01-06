import "../App.css";
import { useNavigate } from "react-router-dom";
import genshinImg from "../assets/games/genshin.webp";
import hsrImg from "../assets/games/hsr.webp";
import arknightsImg from "../assets/games/arknights.png";
import bluearchiveImg from "../assets/games/bluearchive.jpg";

function GameGrid() {
    const navigate = useNavigate();
    
    const games = [
        { name: "Genshin Impact", img: genshinImg, path: "/genshin"},
        { name: "Honkai Star Rail", img: hsrImg, path: "/starrail" },
        { name: "Arknights", img: arknightsImg, path: "/arknights" },
        { name: "Game 4", img: bluearchiveImg },
        { name: "Game 5", img: bluearchiveImg },
        { name: "Game 6", img: bluearchiveImg },
        { name: "Game 7", img: bluearchiveImg },
        { name: "Game 8", img: bluearchiveImg },
    ];

    const click = (game: any) => {
        navigate(game.path);
    };

    return (
        <div className="game-grid">
            {games.map((game) => (
                <div className="game-card" onClick={() => click(game)}>
                    <img src={game.img} alt={game.name} />
                    <p>{game.name}</p>
                </div>
            ))}
        </div>
    );
}

export default GameGrid;
