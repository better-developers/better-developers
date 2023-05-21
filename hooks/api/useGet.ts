import { useFetch } from './useFetch';

export function useGet<Tret, Tbody = unknown>(url: string, body?: Tbody) {
    return useFetch<Tret, Tbody>('GET', url, body);
}
