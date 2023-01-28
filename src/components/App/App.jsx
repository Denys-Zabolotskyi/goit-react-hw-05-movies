import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { fetchTrendMovies } from 'services/api';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link onClick={fetchTrendMovies} to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          <Link to="/moviedetalis">MovieDetails</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviedetalis" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
