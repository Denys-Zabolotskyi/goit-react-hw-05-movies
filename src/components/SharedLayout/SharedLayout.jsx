import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
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
      <Outlet />
    </Container>
  );
};
