import { fetchActorsByMovieId } from 'fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import s from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const addAutoScroll = () => {
    const cardHeight = 220;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setIsLoading(true);

    fetchActorsByMovieId(Number(movieId))
      .then(data => {
        setActors(data.cast);
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
    <ul className={s.actorsList}>
      {actors.length !== 0 ? (
        actors.map(
          actor =>
            actor.profile_path && (
              <li className={s.actorCard} key={actor.id}>
                <img
                  className={s.actorPhoto}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <div className={s.actorDesc}>
                  <p>{actor.name}</p>
                  <p>{actor.character}</p>
                </div>
              </li>
            )
        )
      ) : (
        <p className={s.noActors}>We don't have actors info for this movie</p>
      )}
    </ul>
  );
};

export default Cast;
