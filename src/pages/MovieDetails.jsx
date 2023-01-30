import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/api';

import {
  AdditionalInfoLink,
  GoBackLink,
  MainTitle,
  MovieBox,
  MovieInfo,
  MovieInfoBox,
  PosterImage,
  SecondTitle,
  TitleInfoText,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviInfo, setmoviInfo] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // console.log(moviInfo);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        // console.log(movie);
        setmoviInfo(movie);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, poster_path, vote_average, release_date, overview, genres } =
    moviInfo;
  // console.log(genres);
  return (
    <MovieBox>
      <GoBackLink to={'/'}>Go Back</GoBackLink>
      <MovieInfoBox>
        <PosterImage
          src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
          alt="ti"
        />
        <MovieInfo>
          <MainTitle>{title} ()</MainTitle>
          <SecondTitle>Overview</SecondTitle>
          <TitleInfoText>{overview}</TitleInfoText>
          <SecondTitle>Genres</SecondTitle>
          <TitleInfoText>
            {/* {genres.map(({ name }) => name).join(', ')} */}
            genres
          </TitleInfoText>
        </MovieInfo>
      </MovieInfoBox>
      <div>
        <SecondTitle>Additional info</SecondTitle>
        <ul>
          <li>
            <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
          </li>
          <li>
            <AdditionalInfoLink to="reviews">Review</AdditionalInfoLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </MovieBox>
  );
};
