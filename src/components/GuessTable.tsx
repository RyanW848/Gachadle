import GuessRow from "./GuessRow.tsx";
import "../App.css"

function GuessTable({ game }: { game: string }) {

    const gameMap = [
        {
            name: "Genshin",
            categories: ['Character', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 
        },
        {
            name: "StarRail",
            categories: ['Character', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 
        },
        {
            name: "Arknights",
            categories: ['Character', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 
        },
    ];

    const currentGame = gameMap.find((g) => g.name === game);
    if (!currentGame) {
        return <p>Game not found</p>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table className="guess-table">
                <thead>
                    <tr>
                        {currentGame.categories.map((category) => (
                            <th className="table-header">{category}</th>
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