import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGeneres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchGenreResponse>("/genres", { signal: controller.signal })
            .then((res) => {
                setGeneres(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof Error) {
                    return;
                }
                setError(error.message);
                setIsLoading(false);
            });
        // .finally(() => {
        //     setIsLoading(false);
        // });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;