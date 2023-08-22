import { useState, useEffect, useRef, useContext } from 'react';

import { MovieCard } from './MovieCard';
import { SearchContext } from '../../pages/Search';

import getMovieImage from '../../utils/getMovieImage';
import searchMovie from '../../utils/searchMovie';

export const SearchList = (props) => {
  const { routeParameters, query, setQuery } = useContext(SearchContext);

  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState([]);
  const [noMovieWasFound, setNoMovieWasFound] = useState(false);

  const infiniteScroll = useRef(false);

  const movieData = useRef([]);

  useEffect(() => {
    setPage(1);
    setQuery(routeParameters);
    infiniteScroll.current = false;
  }, [routeParameters]);

  useEffect(() => {
    if (infiniteScroll.current !== true) setMovie([]);
    setNoMovieWasFound(false);

    theMovieDB();
    async function theMovieDB() {
      const response = await searchMovie(query, props.language, page);

      if (response.results.length === 0 && response.total_pages === 1)
        setNoMovieWasFound(true);

      destructuring(response.results);
    }
  }, [page, query]);

  const destructuring = (movies) => {
    movieData.current = [];

    for (const filme of movies) {
      const { id, title, poster_path, release_date, overview, vote_average } =
        filme;
      const posterImage = getMovieImage(poster_path);

      const formattedDate =
        release_date === undefined
          ? 'Não encontrado'
          : release_date.split('-').reverse().join('/');
      const formattedNote = Number(vote_average).toFixed(1);

      const movie = {
        id: id,
        title: title,
        poster: posterImage,
        date: formattedDate,
        summary: overview,
        note: formattedNote,
      };

      movieData.current.push(movie);
    }

    if (infiniteScroll.current === true) {
      return setMovie([...movie, ...movieData.current]);
    }

    setMovie(movieData.current);
  };

  useEffect(() => {
    const cards = document.querySelectorAll('article');

    if (infiniteScroll.current === true && movieData.current.length !== 0) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage(page + 1);
        }
      });
      observer.observe(cards[cards.length - 1]);

      return () => observer.unobserve(cards[cards.length - 1]);
    }
  }, [movieData.current]);

  function showMore() {
    setPage(page + 1);
    infiniteScroll.current = true;
  }

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 140px)' }} className="pb-10">
        <section className="flex justify-center gap-14 flex-wrap">
          {noMovieWasFound === true ? (
            <h2 className="text-4xl text-center">
              Nenhum filme foi encontrado
            </h2>
          ) : (
            movie.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                date={movie.date}
                note={movie.note}
                image={movie.poster}
                id={movie.id}
              />
            ))
          )}
        </section>

        {movie.length < 20 || infiniteScroll.current === true || (
          <button
            type="button"
            className="block m-auto text-3xl p-3 bg-color-2 hover:bg-color-4 duration-300 text-white rounded-3xl mt-10"
            onClick={showMore}
          >
            Mostrar Mais
          </button>
        )}
      </div>
    </>
  );
};
