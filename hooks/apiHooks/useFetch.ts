import { useState } from 'react';

export function useFetch<Tret, Tbody = unknown>(method: string, url: string, body?: Tbody) {
    const [data, setData] = useState<Tret>();
    const [status, setStatus] = useState<number>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const setStatusChainable = (response: Response) => {
        setStatus(response.status);
        return response;
    };

    const performFetch = async <TNewBody>(newBody?: TNewBody) => {
        setLoading(true);

        const headers = {
            'Content-Type': 'application/json',
        } as const satisfies HeadersInit;

        const requestBody = newBody ?? body;

        fetch(`${url}`, {
            method,
            headers,
            body: JSON.stringify(requestBody),
        })
            .then((response) => setStatusChainable(response))
            .then((response) => response.json() as Promise<Tret>)
            .then((data) => setData(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    };

    return { data, status, error, loading, performFetch };
}
