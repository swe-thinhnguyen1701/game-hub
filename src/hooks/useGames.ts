import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}
// "/games"
const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll({
        params: {
            genres: gameQuery.genre.id,
            parent_platforms: gameQuery.platform.id,
            ordering: gameQuery.sortOrder.value,
            search: gameQuery.search
        }
    }),
    staleTime: 24 * 60 * 60 * 1000
});

export default useGames;