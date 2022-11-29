import { fetchReviewsByMovieId } from 'fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const addAutoScroll = () => {
    const cardHeight = 140;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetchReviewsByMovieId(Number(movieId))
      .then(data => {
        setReviews(data.results);
      })
      .finally(() => {
        setTimeout(() => {
          addAutoScroll();
        }, 100);
      });
  }, [movieId]);
  return (
    <ul className={s.reviewsList}>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
