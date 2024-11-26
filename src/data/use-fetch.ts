// use-fetch.ts
import { useEffect, useState } from "react";

export type Product = {
    quantity: number;
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    image?: string;
}

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Fallo en la obtención de datos')
                }
                
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error:', error)
            }
        };

        fetchData();
    }, [url])

    return data;
}

export default useFetch;