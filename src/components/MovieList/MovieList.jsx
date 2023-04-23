import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieListCSS } from './MovieList.styled';

export const MovieList = props => {
  const { movies, previousLocation } = props;
  const location = useLocation();

  return (
    <MovieListCSS>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            state={location}
            to={
              previousLocation.includes(`movies`)
                ? `${movie.id}`
                : `movies/${movie.id}`
            }
            key={movie.id}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </MovieListCSS>
  );
};
