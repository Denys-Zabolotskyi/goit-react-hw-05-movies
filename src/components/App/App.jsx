import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';
import { Container, Header, Link } from './App.styled';
import { CastList } from 'components/CastList/CastList';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
// import { CastList } from 'components/CastList/CastList';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/moviedetalis">MovieDetails</Link> */}
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
