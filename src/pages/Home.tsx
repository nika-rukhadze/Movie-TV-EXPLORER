import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchMovies } from '../services/api';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = useQuery(['movies', query], () => fetchMovies(query), { enabled: !!query });

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading data</div>}
      {data && <div>{data.map((movie: any) => <div key={movie.id}>{movie.title}</div>)}</div>}
    </div>
  );
};

export default Home;
