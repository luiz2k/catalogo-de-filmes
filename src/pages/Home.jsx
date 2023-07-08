import { Carousel } from "../components/Carousel/Carousel"
import { Link } from "react-router-dom"

const category = {
  emCartaz: 'now_playing',
  popularidade: 'popular',
  avaliacao: 'top_rated',
  emBreve: 'upcoming'
}

export const Home = () => {
  window.scrollTo(0, 0);
  document.title = 'Início'

  return (
    <>
      <section style={{minHeight: 'calc(100vh - 60px)'}} className="flex flex-col justify-center">
        <article>
          <div className="flex justify-between max-w-screen-xl m-auto bg-gradient-to-r from-color-2 p-1">
            <h2 className="flex items-center pl-3 text-2xl lg:text-3xl text-white">Mais populares</h2>
            <Link to="/filmes/populares/" className="text-2xl sm:text-3xl flex justify-center items-center p-2 text-white bg-color-2 hover:bg-color-4 duration-300 rounded-lg w-[9.138rem]">VER MAIS</Link>
          </div>
          <Carousel category={category.popularidade} page={1} language={'pt-br'} />
        </article>

        <article>
          <div className="flex justify-between max-w-screen-xl m-auto bg-gradient-to-r from-color-2 p-1">
            <h2 className="flex items-center pl-3 text-2xl lg:text-3xl  text-white">Melhores avaliações</h2>
            <Link to="/filmes/melhoresavaliados/" className="text-2xl sm:text-3xl flex justify-center items-center p-2 text-white bg-color-2 hover:bg-color-4 duration-300 rounded-lg w-[9.138rem]">VER MAIS</Link>
          </div>
          <Carousel category={category.avaliacao} page={1} language={'pt-br'} />
        </article>
      </section>
    </>
  )
}