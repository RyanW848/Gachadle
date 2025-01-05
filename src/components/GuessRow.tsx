import GuessSquare from "./GuessSquare.tsx"

function GuessRow({squareCount}: {squareCount: number}) {
    const squares = Array.from({ length: squareCount }, (_, index) => (
        <GuessSquare key={`square-${index}`} />
    ));

    return <tr>{squares}</tr>;
}

export default GuessRow;

