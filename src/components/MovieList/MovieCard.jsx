import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MovieCard = (props) => {
  return (
    <article className="group w-96 overflow-hidden bg-color-3 rounded-2xl cursor-pointer">
      <Link to={`/filmes/${props.id}`} title={props.title}>
        <div className="h-[35.3rem] overflow-hidden">
          <img src={props.image} alt={`Imagem do filme ${props.title}`} className="group-hover:scale-105 group-hover:rotate-2 duration-300" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center flex-col h-[8.25rem] pt-2">
            <h2 className="text-3xl text-center text-white flex items-center justify-center">{props.title}</h2>
            <p className="text-3xl my-2 opacity-50 text-white text-center">{props.date}</p>
          </div>
          <div className="flex items-center text-white justify-between p-2">
            <p className="text-3xl flex items-center gap-2 text-yellow-500"><FaStar /> {props.note}</p>
            <button to="/" className="text-2xl bg-color-2 p-2 rounded-lg duration-300 group-hover:bg-color-4">MAIS DETALHES</button>
          </div>
        </div>
      </Link>
    </article>
  )
}
