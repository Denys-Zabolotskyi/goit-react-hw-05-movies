import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '1a4aff832e717c565fcddbbcd57e889d';

export const fetchTrendMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=1`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get trends movies now.' + error);
  }
};

export const fetchMovieById = async monieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${monieId}?api_key=${KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.error(
      'Something wrong! Can not get trends movies by ID now.' + error
    );
  }
};
