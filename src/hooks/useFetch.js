import {useEffect, useState} from "react";
import {URL_DATA_ROOT} from "../constants";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortter = new AbortController();
        fetch(URL_DATA_ROOT + url, {signal: abortter.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error(`Could not retrieve data.`);
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setIsLoading(false);
                    setError(error.message);
                }
            });
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;
