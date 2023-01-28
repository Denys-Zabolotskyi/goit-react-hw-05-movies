// import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const moviesList = await fetchTrendMovies();
        setMovies(movies => [...movies, ...moviesList]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendMovies();
  }, []);
  return (
    <section>
      <h1>Trandy Today</h1>
      {isLoading && movies.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <MovieList movies={movies} />
      )}
    </section>
  );
};
