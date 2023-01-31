import GlobalStyle from 'components/App/globalStyles';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};
