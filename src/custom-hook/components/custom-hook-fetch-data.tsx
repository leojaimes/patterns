import { useFetchData } from './useFetchData';

export function CustomHookFetchData() {
  const { data, error, isFetching } = useFetchData();
  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p />;
  }

  return (
    <>
      {data.map(({ name, html_url }) => (
        <div key={html_url}>
          <p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </p>
        </div>
      ))}
    </>
  );
}
