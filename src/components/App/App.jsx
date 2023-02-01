import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { CastList } from 'components/CastList/CastList';
// import { ReviewsList } from 'components/ReviewsList/ReviewsList';

// import { Home } from 'pages/Home';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const CastList = lazy(() => import('../CastList/CastList'));
const ReviewsList = lazy(() => import('../ReviewsList/ReviewsList'));
// import { CastList } from 'components/CastList/CastList';
// import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
