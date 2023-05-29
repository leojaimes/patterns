import { useFetchData } from './useFetchData';

interface Props {
  url: string;
}
export function CustomHookFetchData({ url }: Props) {
  const { data, error, isFetching } = useFetchData({ url });
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
