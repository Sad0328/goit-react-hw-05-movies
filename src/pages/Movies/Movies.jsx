import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';// change code

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovie = searchParams.get('query') || '';

  const searchMovies = query => {
    setLoading(true);

    fetchSearchByKeyword(query)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (queryMovie) {
      searchMovies(queryMovie);
    }
  }, [queryMovie]);

  const location = useLocation(); // change code
  const goBack = useRef(location.state?.from || '/'); // change code

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && <p>Sorry....No found....Try again</p>}
      {searchFilms && <MoviesList films={searchFilms} />}

      <Link to={goBack.current}>
        <button type="button">Go back</button>
      </Link>
    </main>
  );
};

export default Movies;



/* import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && <p>Sorry....No found....Try again</p>}
      {searchFilms && <MoviesList films={searchFilms} />}
    </main>
  );
};

export default Movies;
*/