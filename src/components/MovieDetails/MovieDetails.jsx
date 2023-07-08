import { useState, useEffect } from "react"

import { useParams, useNavigate } from "react-router-dom"

import { MovieInfo } from "./MovieInfo"

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

export const MovieDetails = (props) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?language=${props.language}`

    theMovieDB(fetchUrl, fetchSettings)
    async function theMovieDB(url, settings) {
      try {
        const theMovieDB = await fetch(url, settings)
        const response = await theMovieDB.json()
        destructuring(response)
      } catch (error) {
        navigate('/404')
      }
    }
  }, [])

  const destructuring = (filme) => {
    const { id, title, poster_path, backdrop_path, release_date, overview, vote_average, runtime, revenue, budget, genres, tagline } = filme

    const posterImage = getMovieImage(poster_path)
    const backgroundImage = getMovieImage(backdrop_path)

    const formatGenre = genres.map((genre) => {
      return genre.name
    })

    const formattedGenres = formatGenre.join(', ')

    const formattedDate = release_date === undefined || release_date === '' ? 'Não encontrado' : release_date.split('-').reverse().join("/")

    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    const formattedTime = `${hours}h ${minutes}m`

    const formattedNote = Number(vote_average).toFixed(1)
    const formattedRevenue = revenue.toLocaleString('pt-br')
    const formattedBudget = budget.toLocaleString('pt-br')

    const movie = {
      id: id,
      title: title,
      poster: posterImage,
      background: backgroundImage,
      date: formattedDate,
      summary: overview,
      note: formattedNote,
      time: formattedTime,
      budget: formattedBudget,
      revenue: formattedRevenue,
      genres: formattedGenres,
      tagline: tagline,
    }

    setMovie(movie)
  }

  return (
    <MovieInfo
      id={movie.id}
      title={movie.title}
      slogan={movie.tagline}
      poster={movie.poster}
      background={movie.background}
      date={movie.date}
      summary={movie.summary === '' ? 'Não encontrado' : movie.summary}
      note={movie.note}
      time={movie.time}
      budget={movie.budget === '0' ? 'Não encontrado' : movie.budget}
      revenue={movie.revenue === '0' ? 'Não encontrado' : movie.revenue}
      genres={movie.genres}
    />
  )
}
