import { Link } from "react-router-dom"

export const CarouselCard = (props) => {
  return (
    <Link to={`/filmes/${props.id}`} title={`${props.title}`} className='group block relative w-[19rem] mx-auto rounded-2xl cursor-pointer overflow-hidden'>
      <h2 className='absolute text-2xl bottom-0 w-full text-white text-center bg-color-5 flex justify-center items-center p-3 h-[5.5rem]'>{props.title}</h2>
      <p className='absolute top-3 left-3 text-white text-2xl rounded-full p-2 bg-color-5 opacity-0 group-hover:opacity-100 duration-300'>{props.note}</p>
      <img src={props.image} alt={`Imagem do filme ${props.title}`} />
    </Link>
  )
}
