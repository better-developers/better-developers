import { useState } from 'react';

export function useFetch<Tret, Tbody = unknown>(method: string, url: string, body?: Tbody) {
    const [data, setData] = useState<Tret>();
    const [isSuccess, setIsSuccess] = useState<boolean>();
    const [status, setStatus] = useState<number>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const setStatusChainable = (response: Response) => {
        setStatus(response.status);
        return response;
    };

    const setIsSuccessChainable = (response: Response) => {
        setIsSuccess(response.ok);
        return response;
    };

    const performFetch = async (newBody?: Tbody) => {
        setLoading(true);

        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        const requestBody = newBody ?? body;

        return fetch(url, {
            method,
            headers,
            body: JSON.stringify(requestBody),
        })
            .then(setStatusChainable)
            .then(setIsSuccessChainable)
            .then((response) => response.json() as Promise<Tret>)
            .then((data) => setData(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    };

    return { data, status, isSuccess, error, loading, performFetch };
}
