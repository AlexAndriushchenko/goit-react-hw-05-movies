import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import {
  AdditionalInfo,
  Container,
  Genres,
  ImageWrapper,
  LinkAdditional,
  LinkGoBack,
  MovieCardStyled,
  Overview,
  Rating,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const IMAGE_BASE_API_URL = `https://image.tmdb.org/t/p/w500`;
  const FALLBACK_IMAGE_URL = `https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg`;

  useEffect(() => {
    getMovieDetails();

    async function getMovieDetails() {
      try {
        const movieDetails = await apiService.getMovieDetailsById(movieId);
        const { genres, original_title, poster_path, overview, vote_average } =
          movieDetails;
        setMovie({
          genres: genres.map(genre => genre.name),
          title: original_title,
          image: poster_path
            ? IMAGE_BASE_API_URL + poster_path
            : FALLBACK_IMAGE_URL,
          overview: overview,
          rating: vote_average,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId, IMAGE_BASE_API_URL, FALLBACK_IMAGE_URL]);

  if (!movie) return null;

  const { genres, title, image, overview, rating } = movie;

  return (
    <Container>
      <LinkGoBack to={location.state}> ← Go back </LinkGoBack>

      <MovieCardStyled>
        <ImageWrapper>
          <img src={image} alt={title} width="200px" height="300px" />
        </ImageWrapper>

        <div>
          <Title>{title}</Title>
          <Rating>Rating: {rating}</Rating>
          <Overview>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Overview>
          <Genres>
            <h3>Genres</h3>
            <p>{genres.join(', ')}</p>
          </Genres>
        </div>
      </MovieCardStyled>

      <AdditionalInfo>
        <h2>Additional information</h2>
        <LinkAdditional to="cast" state={location.state}>
          Cast
        </LinkAdditional>
        <LinkAdditional to="reviews" state={location.state}>
          Reviews
        </LinkAdditional>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </Container>
  );
};

export default MovieDetails;
