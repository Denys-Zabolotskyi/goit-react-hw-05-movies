import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataByCast } from 'services/api';
import { Item, List, Photo, Text } from './CastList.styled';

export const CastList = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const getCastById = async () => {
      try {
        const cast = await fetchDataByCast(movieId);
        // console.log(movie);
        setCredits(cast);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    };
    getCastById();
  }, [movieId]);

  return (
    <>
      {credits && credits.length > 0 ? (
        <List>
          {credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <Item key={id}>
                <Photo
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={original_name}
                  height="100"
                />
                <div>
                  <Text>
                    {/* <RxDotFilled /> */}
                    {original_name}
                  </Text>
                  <Text>Character: {character}</Text>
                </div>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We don't have any information about casts for this movie.</p>
      )}
    </>
  );
};
