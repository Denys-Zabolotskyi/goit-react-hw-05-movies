import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchTrendMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const moviesList = await fetchTrendMovies();
        setMovies(moviesList);
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
        <Loader />
      ) : (
        <MovieList movies={movies} />
      )}
    </section>
  );
};

export default Home;
