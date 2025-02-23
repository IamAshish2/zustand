import useGameStore from "../../store/tictacToestore";
import Square from "./Square";

interface StatusProps {
    winner: string | null;
    turns: number;
    player: string;
}

export default function Board() {
    const squares = useGameStore((state) => state.squares);
    const setSquares = useGameStore((state) => state.setSquares);
    const xIsNext = useGameStore((state) => state.xIsNext);
    const setXIsNext = useGameStore((state) => state.setXIsNext);
    const player = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    const turns = calculateTurns(squares);
    const status = calculateStatus({ winner, turns, player })
    console.log(status);


    function handleClick(i: number) {
        if (squares[i] || winner) return;
        const nextSquares = squares.slice()
        nextSquares[i] = player
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

    function calculateWinner(squares: (string | null)[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    function calculateTurns(squares: (string | null)[]) {
        return squares.filter((square) => !square).length
    }

    function calculateStatus({ winner, turns, player }: StatusProps): string {
        if (!winner && !turns) return 'Draw'
        if (winner) return `Winner ${winner}`
        return `Next player: ${player}`
    }


    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                width: 'calc(12 * 2.5rem)',
                height: 'calc(12* 2.5rem)',
                border: '1px solid #999',
            }}
        >
            {squares.map((square, squareIndex) => (
                <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
            ))}
        </div>
    )
}
