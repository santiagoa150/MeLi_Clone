import axios from 'axios';
import type { Dispatch, SetStateAction } from 'react';

/**
 * MakeRequest is a generic function to fetch data from a given API route.
 * @param route - The API route to fetch data from, defined in ApiRoutesConstants.
 * @param setData - A state setter function to update the data state with the fetched data.
 * @param setError - A state setter function to update the error state with any error message.
 * @param setLoading - A state setter function to update the loading state, indicating whether the request is in progress.
 */
export function MakeGetRequest<T>(
    route: string,
    setData: Dispatch<SetStateAction<T>>,
    setError: Dispatch<SetStateAction<string | null>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
): void {
    axios
        .get<{ success: true; data: T }>(route, { baseURL: import.meta.env.VITE_API_URL })
        .then((res) => {
            if (res.status !== 200) throw new Error('Something went wrong');
            return res.data.data;
        })
        .then((data) => setData(data))
        .catch((err) => {
            setError(err.response.data.message);
        })
        .finally(() => setLoading(false));
}
