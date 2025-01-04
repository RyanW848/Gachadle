import GuessRow from "../components/GuessRow.tsx";
import genshinBackground from "../assets/backgrounds/genshin.webp"
import "../App.css"

function Genshin() {
    return (
        <div className="game-body" style={{backgroundImage: `url(${genshinBackground})`}}>
            <div><GuessRow squareCount={4} /></div>
        </div>
    );
}

export default Genshin;