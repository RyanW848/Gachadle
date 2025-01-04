import GuessSquare from "./GuessSquare.tsx"

export default function GuessRow({squareCount}: {squareCount: number}) {
    const squares = Array.from({ length: squareCount }, (_, index) => (
        <GuessSquare key={`square-${index}`} />
    ));

    return <div style={{ display: 'flex', justifyContent: 'center'}}>{squares}</div>;
}

