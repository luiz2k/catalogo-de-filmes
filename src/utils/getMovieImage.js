const getMovieImage = (image) => {
  if (image === null) {
    return console.warn('Imagem não encontrada');
  }

  return `https://image.tmdb.org/t/p/original/${image}`;
};

export default getMovieImage;
