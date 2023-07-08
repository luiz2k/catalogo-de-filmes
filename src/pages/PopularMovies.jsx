import { MovieList } from '../components/MovieList/MovieList'

const category = {
  emCartaz: 'now_playing',
  popularidade: 'popular',
  avaliacao: 'top_rated',
  emBreve: 'upcoming'
}

export const PopularMovies = () => {
  window.scrollTo(0, 0);
  document.title = 'Populares'
  
  return (
    <>
      <h2 className='text-5xl text-center p-10 font-semibold text-color-2'>Mais Populares no Momento</h2>
      <MovieList category={category.popularidade} language={'pt-br'} page={1} />
    </>
  )
}
