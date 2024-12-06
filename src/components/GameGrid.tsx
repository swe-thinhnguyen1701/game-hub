import useGames from "../hooks/useGames";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <ul>
            {error && <p>{error}</p>}
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    )
}

export default GameGrid;