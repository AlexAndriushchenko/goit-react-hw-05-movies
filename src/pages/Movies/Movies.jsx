import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { FormContainer, SearchBtn, SearchField } from './Movies.styled';

const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [search, setSearch] = useSearchParams();

  const textSearchValue = search.get('search');

  const onSubmitForm = evt => {
    evt.preventDefault();
    setSearch({ search: value });
  };

  useEffect(() => {
    if (!textSearchValue) return;
    findMovie();

    async function findMovie() {
      try {
        const result = await apiService.searchByWord(textSearchValue);
        setMovies(result);
      } catch (error) {
        console.log(error);
      }
    }
  }, [textSearchValue]);

  useEffect(() => {
    if (textSearchValue) {
      setValue(textSearchValue);
    }
  }, [textSearchValue]);

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <SearchField
          type="text"
          onChange={evt => setValue(evt.target.value)}
          value={value}
          placeholder="Enter your movie"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
      {movies && (
        <MovieList movies={movies} previousLocation={location.pathname} />
      )}
    </FormContainer>
  );
};

export default Movies;
