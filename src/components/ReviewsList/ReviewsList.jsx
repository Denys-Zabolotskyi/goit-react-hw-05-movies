import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item, Text } from './ReviewsList.styled';
import { fetchDataByReviews } from 'services/api';

export const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviewsById = async () => {
      try {
        const { results } = await fetchDataByReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        return;
      }
    };
    getReviewsById();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <List>
          {reviews.map(({ author, content, id }) => {
            return (
              <Item key={id}>
                <Text>Author: {author}</Text>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </List>
      ) : (
        <Text>We don't have any reviews for this movie.</Text>
      )}
    </>
  );
};
