import { useLocation } from 'react-router-dom';
import { List, MovieItem, Link } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </MovieItem>
      ))}
    </List>
  );
};
