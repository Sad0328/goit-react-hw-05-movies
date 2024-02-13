import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') || '';

  useEffect(() => {
    if (search) {
      searchMovies(search);
    }
  }, [search]);

  const searchMovies = query => {
    setLoading(true);

    fetchSearchByKeyword(query)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(
          searchResults.length === 0 ? 'No movies found(...... Try again.' : null
        );
      })
      .catch(error => {
        console.error(error);
        setNoMoviesText('Error .......... Try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Form searchMovies={handleSearch} />
      {loading && <Loader />}
      {noMoviesText && <p>{noMoviesText}</p>}
      {searchFilms.length > 0 && <MoviesList films={searchFilms} />}
    </main>
  );
};

export default Movies;
