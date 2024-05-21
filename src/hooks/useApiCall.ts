import { useState, useEffect } from 'react';

type ApiResponse<T> = {
	data: T | null;
	error: string | null;
    loading: boolean;
};

type ApiCallFn<T> = () => Promise<T>;

function useApiCall<T>(apiCall: ApiCallFn<T>): ApiResponse<T> {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<T | null>(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await apiCall();
            setData(response);
        } catch (error: unknown) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [apiCall]);

return { loading, error, data } as ApiResponse<T>;
}

export default useApiCall;
