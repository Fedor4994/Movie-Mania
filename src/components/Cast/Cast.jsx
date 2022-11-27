import { fetchActorsByMovieId } from 'fetchData';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchActorsByMovieId(Number(movieId)).then(data => {
      setActors(data.cast);
    });
  }, [movieId]);
  return (
    <ul className={s.actorsList}>
      {actors.map(
        actor =>
          actor.profile_path && (
            <li className={s.actorCard} key={actor.id}>
              <img
                className={s.actorPhoto}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          )
      )}
    </ul>
  );
};

export default Cast;
