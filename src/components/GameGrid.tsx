import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Text>Loading...</Text>; // Show a loading indicator while fetching data
    }

    if (error) {
        return <Text>Error: {error}</Text>; // Show error message if there's an error
    }

    if (!games.length) {
        return <Text>No games found.</Text>; // Show a message if no games are returned
    }


    return (
        <ul>
            {games.map((game) => (
                <li key={game.id}>{game.name}</li>
            ))}
        </ul>
    )
}

export default GameGrid;