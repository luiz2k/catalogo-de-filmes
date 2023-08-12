import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

import { CarouselCard } from './CarouselCard';

const fetchSettings = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5MmYwMTMwYTdlMjYxNTU0ZDczNzAxYzlmYjFhNSIsInN1YiI6IjYzZWQyNDAxNjk5ZmI3MDA5ZTNkOWY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4hswoEcS7QRPSL-z8__xbTMp-X6pG81yoVyCiCLTDWM',
  },
};

const getMovieImage = (image) => {
  return `https://image.tmdb.org/t/p/original/${image}`;
};

export const Carousel = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchUrl = `https://api.themoviedb.org/3/movie/${props.category}?language=${props.language}&page=${props.page}`;

    theMovieDB(fetchUrl, fetchSettings);
    async function theMovieDB(url, settings) {
      const theMovieDB = await fetch(url, settings);
      const response = await theMovieDB.json();

      destructuring(response.results);
    }
  }, []);

  const destructuring = (filmes) => {
    let movieData = [];

    for (const filme of filmes) {
      const { id, title, poster_path, vote_average } = filme;

      const posterImage = getMovieImage(poster_path);

      const formattedNote = Number(vote_average).toFixed(1);

      const movie = {
        id: id,
        title: title,
        poster: posterImage,
        note: formattedNote,
      };

      movieData.push(movie);
    }

    setMovie(movieData);
  };

  return (
    <>
      {movie.length >= 9 ? (
        <article className="py-10">
          <div className="flex justify-between max-w-screen-xl m-auto bg-gradient-to-r from-color-2 p-1">
            <h2 className="flex items-center pl-3 text-2xl lg:text-3xl text-white">
              {props.carouselCategory}
            </h2>
            <Link
              to="/filmes/populares/"
              className="text-2xl sm:text-3xl flex justify-center items-center p-2 text-white bg-color-2 hover:bg-color-4 duration-300 rounded-lg w-[9.138rem]"
            >
              VER MAIS
            </Link>
          </div>
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              perPage: 5,
              breakpoints: {
                1250: {
                  perPage: 4,
                },
                1000: {
                  perPage: 3,
                },
                790: {
                  perPage: 2,
                },
                540: {
                  perPage: 1,
                  arrows: false,
                  gap: '3rem',
                },
              },
            }}
          >
            <SplideTrack>
              {movie.slice(0, 9).map((movie) => (
                <SplideSlide key={movie.id}>
                  <CarouselCard
                    title={movie.title}
                    image={movie.poster}
                    note={movie.note}
                    id={movie.id}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </article>
      ) : (
        ''
      )}
    </>
  );
};
