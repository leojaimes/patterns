import React, { useState, useEffect } from 'react';

const apiBaseUrl = 'https://api.github.com';

const url = `${apiBaseUrl}/orgs/Developero-oficial/repos?sort=created`;

interface Repository {
  name: string;
  html_url: string;
}

export function FetchDataComponent() {
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
  }, []);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return data.map(({ name, html_url }) => (
    <div key={html_url}>
      <p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
    </div>
  ));
}
