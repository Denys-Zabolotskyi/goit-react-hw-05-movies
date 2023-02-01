import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchSearchData } from 'services/api';
import { toast } from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = inputSearchName => {
    setSearchParams(inputSearchName !== '' ? { query: inputSearchName } : {});
    setMovies([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const findMovies = async () => {
      try {
        setIsLoading(true);
        const dataResponse = await fetchSearchData(query, page);
        dataResponse.results.length === 0
          ? toast.error(
              'Sorry! There is no movies with this name. Try something else!',
              {
                position: 'top-center',
                duration: 2000,
              }
            )
          : setMovies(dataResponse.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovies();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {IsLoading && <Loader />}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
