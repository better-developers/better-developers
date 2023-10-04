import { useFetch } from './useFetch';

export function usePost<Tret, Tbody = unknown>(url: string, body?: Tbody) {
    return useFetch<Tret, Tbody>('POST', url, body);
}
