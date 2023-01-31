import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';

import { SearchBar } from 'components/Searchbar/Searchbar';

export const Movies = () => {
  return (
    <>
      <SearchBar />
    </>
  );
};
