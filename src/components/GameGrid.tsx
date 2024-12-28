import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = new Array(20);

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={2.5} spacing={10}>
            {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
            {error && <p>{error}</p>}
            {games.map((game) => (
                <GameCard key={game.id} game={game}/>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid;