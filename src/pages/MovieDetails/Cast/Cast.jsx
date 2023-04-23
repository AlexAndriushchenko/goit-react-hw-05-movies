import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  const IMAGE_BASE_API_URL = `https://image.tmdb.org/t/p/w500`;
  const FALLBACK_IMAGE_URL = `https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg`;

  useEffect(() => {
    getMovieCast();

    async function getMovieCast() {
      try {
        const cast = await apiService.getMovieCreditsById(movieId);
        const actors = cast.length > 20 ? cast.slice(0, 20) : cast;
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  if (!cast) return null;

  return (
    <CastList>
      {cast.map(({ id, profile_path, character, original_name }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? IMAGE_BASE_API_URL + profile_path
                : FALLBACK_IMAGE_URL
            }
            alt={original_name}
            width="100px"
            height="150px"
          />
          <p>
            <span>{original_name}</span>
          </p>
          <p>
            character: <span>{character}</span>
          </p>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;