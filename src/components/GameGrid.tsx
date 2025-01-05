import "../App.css";
import { useNavigate } from "react-router-dom";
import genshinImg from "../assets/games/genshin.webp";
import hsrImg from "../assets/games/hsr.webp";
import arknightsImg from "../assets/games/arknights.png";
import bluearchiveImg from "../assets/games/bluearchive.jpg";

function GameGrid() {
    const navigate = useNavigate();
    
    const games = [
        { id: 1, name: "Genshin Impact", img: genshinImg, path: "/genshin"},
        { id: 2, name: "Honkai Star Rail", img: hsrImg, path: "/starrail" },
        { id: 3, name: "Arknights", img: arknightsImg, path: "/arknights" },
        { id: 4, name: "Game 4", img: bluearchiveImg },
        { id: 5, name: "Game 5", img: bluearchiveImg },
        { id: 7, name: "Game 6", img: bluearchiveImg },
        { id: 8, name: "Game 7", img: bluearchiveImg },
        { id: 9, name: "Game 8", img: bluearchiveImg },
    ];

    const click = (game: any) => {
        navigate(game.path);
    };

    return (
        <div className="game-grid">
            {games.map((game) => (
                <div key={game.id} className="game-card" onClick={() => click(game)}>
                    <img src={game.img} alt={game.name} />
                    <p>{game.name}</p>
                </div>
            ))}
        </div>
    );
}

export default GameGrid;
