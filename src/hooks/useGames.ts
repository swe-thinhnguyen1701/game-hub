import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
    useData<Game>("/games", {
        params: {
            genres: gameQuery.genre,
            platforms: gameQuery.platform.id,
            ordering:  gameQuery.sortOrder.value,
            search: gameQuery.search
        }
    },
        [gameQuery]);




export default useGames;