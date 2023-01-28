import { List, MovieItem, Link } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  //   const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </MovieItem>
      ))}
    </List>
  );
};
