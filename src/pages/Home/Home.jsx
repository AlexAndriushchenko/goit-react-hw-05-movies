import React from 'react';
import { useState, useEffect } from 'react';
import { apiService } from 'services/Api';
import { useLocation } from 'react-router-dom';
import { Header } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopularMovies();

    async function getPopularMovies() {
      try {
        const results = await apiService.getTrendingMovies();
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <Header>Trending today</Header>
      {movies.length > 0 && (
        <MovieList movies={movies} previousLocation={location.pathname} />
      )}
    </>
  );
};

export default Home;
