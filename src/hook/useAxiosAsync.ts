import {useState, useEffect} from 'react';
import axios from '@/hook/axiosConfig';

const useAxiosAsync = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('useAxiosAsync...');
        const abortter = new AbortController();
        const fetchData = async  () => {
          try {
              const res = await axios['get'](url, {
                  signal: abortter.signal,
              });
              setData(res.data);
          } catch(error: any) {
              if (error.name !== 'AbortError') {
                  setIsLoading(false);
                  setError(error.message);
              }
          } finally {
              setIsLoading(false);
              setError(null);
          }
        };

        fetchData();

        return () => abortter.abort();
    }, [url]);

    return {data, error, isLoading};
};

export default useAxiosAsync;
