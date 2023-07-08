import { useState, useEffect } from "react"

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

import { CarouselCard } from './CarouselCard';

const fetchSettings = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5MmYwMTMwYTdlMjYxNTU0ZDczNzAxYzlmYjFhNSIsInN1YiI6IjYzZWQyNDAxNjk5ZmI3MDA5ZTNkOWY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4hswoEcS7QRPSL-z8__xbTMp-X6pG81yoVyCiCLTDWM'
    }
}

const getMovieImage = (image) => {
    return `https://image.tmdb.org/t/p/original/${image}`
}

export const Carousel = (props) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchUrl = `https://api.themoviedb.org/3/movie/${props.category}?language=${props.language}&page=${props.page}`

        theMovieDB(fetchUrl, fetchSettings)
        async function theMovieDB(url, settings) {
            const theMovieDB = await fetch(url, settings)
            const response = await theMovieDB.json()

            destructuring(response.results)
        }
    }, [])

    const destructuring = (filmes) => {
        let movieData = []

        for (const filme of filmes) {
            const { id, title, poster_path, vote_average } = filme

            const posterImage = getMovieImage(poster_path)

            const formattedNote = Number(vote_average).toFixed(1)

            const movie = {
                id: id,
                title: title,
                poster: posterImage,
                note: formattedNote
            }

            movieData.push(movie)
        }
        setMovie(movieData)
    }

    return (
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
                        gap: '3rem'
                    }
                }
            }}>
            <SplideTrack className="">
                {movie.slice(0, 9).map((movie) =>
                    <SplideSlide key={movie.id}>
                        <CarouselCard
                            title={movie.title}
                            image={movie.poster}
                            note={movie.note}
                            id={movie.id}
                        />
                    </SplideSlide>
                )}
            </SplideTrack>
        </Splide>
    )
}