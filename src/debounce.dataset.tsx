import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

export default function SearchFetchExample() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 👇 Esta función actualiza la URL con debounce
  const updateQuery = useMemo(
    () =>
      debounce((query) => {
        setSearchParams((prev) => {
          const newParams = new URLSearchParams(prev);
          if (query) {
            newParams.set('q', query);
          } else {
            newParams.delete('q');
          }
          return newParams;
        });
      }, 500),
    [setSearchParams]
  );

  useEffect(() => {
    updateQuery(inputValue);
    return () => updateQuery.cancel();
  }, [inputValue, updateQuery]);

  // 👇 Este effect escucha cambios en la query y hace fetch
  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?title_like=${query}`
        );
        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error('❌ Error al hacer fetch:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const filteredResults = useMemo();

  return (
    <div>
      <h2>Buscar Posts</h2>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />

      {loading && <p>🔄 Cargando...</p>}

      {!loading && results.length === 0 && inputValue && (
        <p>No se encontraron resultados.</p>
      )}

      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
