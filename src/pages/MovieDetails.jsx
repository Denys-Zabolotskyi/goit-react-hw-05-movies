import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
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
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [moviInfo, setmoviInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const posterPath = `https://www.themoviedb.org/t/p/w500${moviInfo?.poster_path}`;
  const releaseYear =
    new Date(Date.parse(moviInfo?.release_date)).getFullYear() || '';
  const userScore = Math.round(moviInfo?.vote_average * 10);
  const genres = moviInfo?.genres.map(({ name }) => name).join(', ');

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movie = await fetchMovieById(movieId);
        setmoviInfo(movie);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    };
    getMovieById();
  }, [movieId]);

  return (
    <MovieBox>
      <GoBackLink to={backLinkHref}>Go Back</GoBackLink>
      {moviInfo && (
        <MovieInfoBox>
          <PosterImage src={posterPath} alt={moviInfo.title} />
          <MovieInfo>
            <MainTitle>
              {moviInfo.title} ({releaseYear})
            </MainTitle>
            <TitleInfoText>User Score: {userScore}%</TitleInfoText>
            <SecondTitle>Overview</SecondTitle>
            <TitleInfoText>{moviInfo.overview}</TitleInfoText>
            <SecondTitle>Genres</SecondTitle>
            <TitleInfoText>{genres}</TitleInfoText>
          </MovieInfo>
        </MovieInfoBox>
      )}

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieBox>
  );
};

export default MovieDetails;
