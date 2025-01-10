import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5];

    const fetchGamesCounter = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <InfiniteScroll
            dataLength={fetchGamesCounter}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
            >

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={2.5} spacing={6}>
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {error && <p>{error.message}</p>}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard game={game} />
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;