import GuessRow from "./GuessRow.tsx";
import "../App.css"
import { genshinCharacters } from "../assets/gameData/genshin.tsx"

function GuessTable({ game }: { game: string }) {

    const gameMap = [
        {
            name: "Genshin",
            data: genshinCharacters, 
        },
        {
            name: "StarRail",
            data: genshinCharacters, 
        },
        {
            name: "Arknights",
            data: genshinCharacters, 
        },
    ];

    const currentGame = gameMap.find((g) => g.name === game);
    if (!currentGame) {
        return <p>Game not found</p>;
    }

    const gameData = currentGame.data;
    const exampleData = Object.values(gameData)[0];
    const categories = ["Photo", "Name"].concat(Object.keys(exampleData));

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table className="guess-table">
                <thead>
                    <tr>
                        {categories.map((category, index) => (
                            <th key={index} className="table-header">{category}</th>
                        ))}    
                    </tr>
                </thead>

                <tbody>
                    <GuessRow squareCount={8} />
                    <GuessRow squareCount={8} />
                </tbody>
            </table>
        </div>
    );
}

export default GuessTable;