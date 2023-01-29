import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviInfo, setmoviInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        console.log(movie);
        setmoviInfo(movie);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setIsLoading(false);
      // }
    };
    getMovieById();
  }, [movieId]);

  const { title, poster_path, vote_average, release_date, overview, genres } =
    moviInfo;

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>
          {title}
          <p></p>
          <p></p>
        </h2>
        <h2>
          <p></p>
        </h2>
        <h2>
          <p></p>
        </h2>
      </div>
      <ul>
        <li>
          <a href="">Cast</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
      </ul>
    </div>
  );
};
