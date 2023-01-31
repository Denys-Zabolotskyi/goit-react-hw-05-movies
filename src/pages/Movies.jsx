import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';
import { fetchSearchData } from 'services/api';

import { SearchBar } from 'components/Searchbar/Searchbar';

export const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = inputSearchName => {
    if (inputSearchName !== searchName) {
      setSearchName(inputSearchName);
      setItems([]);
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
        setIsLoading(true);
        const movies = await fetchSearchData(searchName, page);
        movies.length === 0
          ? toast.error(
              'Sorry! There is no photo with this name. Try something else!',
              {
                position: 'top-center',
                duration: 2000,
              }
            )
          : setItems(items => [...items, ...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovies();
  }, [page, searchName]);
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <Toaster />
      <MovieList items={items} />
    </>
  );
};
