import { useEffect, useState } from 'react';

interface Repository {
  name: string;
  html_url: string;
}

interface Props {
  url: string;
}
export const useFetchData = ({ url }: Props) => {
  const [data, setData] = useState<Repository[] | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await fetch(url);
          const dataRes = await response.json();
          setData(dataRes);
        } catch (e) {
          if (e instanceof Error) {
            setError(e);
          }
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };

    doFetch();
  }, [url]);

  return {
    data,
    isFetching,
    error,
  };
};
