import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(enpoint: string, requestConfig?: AxiosRequestConfig, deps?: React.DependencyList) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(enpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) {
                    return;
                }
                setError(error.message);
                setIsLoading(false);
            });
        // .finally(() => {
        //     setIsLoading(false);
        // });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;