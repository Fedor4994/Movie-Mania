import { fetchReviewsByMovieId } from 'fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const addAutoScroll = () => {
    const cardHeight = 140;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setIsLoading(true);

    fetchReviewsByMovieId(Number(movieId))
      .then(data => {
        setReviews(data.results);
        setIsLoading(false);
      })
      .finally(() => {
        setTimeout(() => {
          addAutoScroll();
        }, 100);
      });
  }, [movieId]);
  return isLoading ? (
    <div className={s.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ccc"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <ul className={s.reviewsList}>
      {reviews.length !== 0 ? (
        reviews.map(review => (
          <li className={s.reviewItem} key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content.split('https')[0]}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};

export default Reviews;
