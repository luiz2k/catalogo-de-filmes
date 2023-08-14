import { useState, useEffect, useRef } from 'react';

import { MovieCard } from './MovieCard';

const fetchSettings = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5MmYwMTMwYTdlMjYxNTU0ZDczNzAxYzlmYjFhNSIsInN1YiI6IjYzZWQyNDAxNjk5ZmI3MDA5ZTNkOWY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4hswoEcS7QRPSL-z8__xbTMp-X6pG81yoVyCiCLTDWM',
  },
};

const getMovieImage = (image) => {
  if (image === null) {
    return console.warn('Imagem não encontrada');
  }

  return `https://image.tmdb.org/t/p/original/${image}`;
};

export const MovieList = (props) => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  const infiniteScroll = useRef(false);
  const movieData = useRef([]);

  function showMore() {
    setPage(page + 1);
    infiniteScroll.current = true;
  }

  useEffect(() => {
    const fetchUrl = `https://api.themoviedb.org/3/movie/${props.category}?language=${props.language}&page=${page}`;

    theMovieDB(fetchUrl, fetchSettings);
    async function theMovieDB(url, settings) {
      const theMovieDB = await fetch(url, settings);
      const response = await theMovieDB.json();

      destructuring(response.results);
    }
  }, [page]);

  const destructuring = (filmes) => {
    movieData.current = [];

    for (const filme of filmes) {
      const { id, title, poster_path, release_date, overview, vote_average } = filme;
      const posterImage = getMovieImage(poster_path);

      const formattedDate =
        release_date === undefined ? 'Não encontrado' : release_date.split('-').reverse().join('/');
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

    setMovie([...movie, ...movieData.current]);
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

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 60px)' }} className="pb-10">
        <section className="flex justify-center gap-14 flex-wrap">
          {movie.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              date={movie.date}
              note={movie.note}
              image={movie.poster}
              id={movie.id}
            />
          ))}
        </section>

        {infiniteScroll.current === true || (
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
