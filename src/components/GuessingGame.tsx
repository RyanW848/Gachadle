import GuessTable from "./GuessTable.tsx";
import InputField from "./InputField.tsx";
import genshinBackground from "../assets/backgrounds/genshin.webp"
import arknightsBackground from "../assets/backgrounds/arknights.webp"
import starrailBackground from "../assets/backgrounds/starrail.webp"
import "../App.css"

function GuessingGame({ game } : { game: string }) {
    
    const backgrounds: Record<string, string> = {
        Genshin : genshinBackground,
        StarRail : starrailBackground,
        Arknights : arknightsBackground
    }

    return (
        <div className="game-background" style={{backgroundImage: `url(${backgrounds[game]})`}}>
            <div className="game-body"> 
                <InputField game={game}/>
                <GuessTable game={game}/> 
            </div>
        </div>
    );
}

export default GuessingGame;