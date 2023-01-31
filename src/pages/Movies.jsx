import { SearchBar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchSearchData } from 'services/api';
import { toast } from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';

export const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleFormSubmit = inputSearchName => {
    if (inputSearchName !== searchName) {
      setSearchName(inputSearchName);
      setMovies([]);
      setPage(1);
    } else {
      setSearchName(inputSearchName);
    }
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    const findMovies = async () => {
      try {
        // setIsLoading(true);
        // console.log(searchName);
        const dataResponse = await fetchSearchData(searchName, page);
        // console.log(dataResponse);
        dataResponse.results.length === 0
          ? toast.error(
              'Sorry! There is no movies with this name. Try something else!',
              {
                position: 'top-center',
                duration: 2000,
              }
            )
          : setMovies(movies => [...movies, ...dataResponse.results]);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };
    findMovies();
  }, [page, searchName]);

  return (
    <>
      {/* movies={movies.results} */}
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
};
