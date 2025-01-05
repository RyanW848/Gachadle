import GuessTable from "../components/GuessTable.tsx";
import InputField from "../components/InputField.tsx";
import genshinBackground from "../assets/backgrounds/genshin.webp"
import "../App.css"


function Genshin() {
    return (
        <div className="game-body" style={{backgroundImage: `url(${genshinBackground})`}}>
            <div> 
                <InputField game={"Genshin"}/>
                <GuessTable game={"Genshin"}/> 
            </div>
        </div>
    );
}

export default Genshin;