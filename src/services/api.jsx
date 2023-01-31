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

export const fetchMovieById = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.error(
      'Something wrong! Can not get trends movies by ID now.' + error
    );
  }
};

export const fetchDataByCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
    );
    return data;
  } catch (error) {
    // throw error;
    console.error('Something wrong! Can not search films by ID' + error);
  }
};
export const fetchDataByReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
    );
    return data;
  } catch (error) {
    // throw error;
    console.error('Something wrong! Can not search films by ID' + error);
  }
};

export const fetchSearchData = async value => {
  // const url = 'https://api.themoviedb.org/3/search/movie';
  try {
    const { data } = await axios.get(
      // `${url}?api_key=${KEY}&query=${value}&page=1`
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${value}&page=1`
    );
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not search films' + error);
  }
};
