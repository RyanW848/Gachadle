function GuessRow({squareCount}: {squareCount: number}) {
    const squares = Array.from({ length: squareCount }, (_, index) => (
        <td
            key={`square-${index}`} 
            className={index === 1 ? "name-square" : "guess-square"}
        >
            a
        </td>
    ));

    return <tr>{squares}</tr>;
}

export default GuessRow;

