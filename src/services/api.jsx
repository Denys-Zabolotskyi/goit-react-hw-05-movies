import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '1a4aff832e717c565fcddbbcd57e889d';

export const fetchTrendMovies = async () => {
  // const url = 'https://api.themoviedb.org/3/trending/movie/week';
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=1`
    );
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
};
