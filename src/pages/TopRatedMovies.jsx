import { MovieList } from '../components/MovieList/MovieList'

const category = {
  emCartaz: 'now_playing',
  popularidade: 'popular',
  avaliacao: 'top_rated',
  emBreve: 'upcoming'
}

export const TopRatedMovies = () => {
  window.scrollTo(0, 0);
  document.title = 'Melhores Avaliados'
  
  return (
    <>
      <h2 className='text-5xl text-center p-10 font-semibold text-color-2'>Com as Melhores Avaliações</h2>
      <MovieList category={category.avaliacao} language={'pt-br'} page={1} />
    </>
  )
}
