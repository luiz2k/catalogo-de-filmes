const fetchSettings = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE5MmYwMTMwYTdlMjYxNTU0ZDczNzAxYzlmYjFhNSIsInN1YiI6IjYzZWQyNDAxNjk5ZmI3MDA5ZTNkOWY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4hswoEcS7QRPSL-z8__xbTMp-X6pG81yoVyCiCLTDWM',
  },
};

async function getMovie(category, language, page) {
  const fetchUrl = `https://api.themoviedb.org/3/movie/${category}?language=${language}&page=${page}`;

  const theMovieDB = await fetch(fetchUrl, fetchSettings);
  const response = await theMovieDB.json();

  return response.results;
}

export default getMovie;
