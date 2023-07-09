import { AiFillStar } from "react-icons/ai";

export const MovieInfo = (props) => {
    document.title = `${props.title}`

    return (
        <div style={{minHeight: 'calc(100vh - 60px)'}} className="py-10 md:flex">
            <article className='sm:grid sm:gap-10 sm:grid-cols-3 m-auto max-w-[100rem]'>
                <section className="col-span-1">
                    <img src={props.poster} alt={`Plano de fundo do filme ${props.title}`} className='rounded-t-3xl sm:rounded-3xl' />
                </section>
                <section className={`flex flex-col gap-5 bg-[#00000040] text-white p-5 sm:rounded-3xl col-span-2`}>
                    <div>
                        <h2 className='text-5xl font-bold'>{props.title}</h2>
                        <p className="text-3xl opacity-60">{props.slogan}</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-semibold">Genero</h2>
                            <p className="text-2xl">{props.genres}</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold">Lançamento</h2>
                            <p className='text-2xl'>{props.date}</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold">Duração</h2>
                            <p className="text-2xl">{props.time}</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold">Nota</h2>
                            <div className="flex items-center gap-2 text-2xl">
                                <AiFillStar className="text-yellow-400" />
                                <p className=''>{props.note}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-semibold">Orçamento:</h2>
                            <p className="text-2xl">{props.budget}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-semibold">Receita:</h2>
                            <p className="text-2xl">{props.revenue}</p>
                        </div>
                    </div>
                    <hr className="sm:hidden" />
                </section>
                <section className="col-span-3 bg-[#00000040] px-5 pb-5 sm:p-5 text-white rounded-b-3xl sm:rounded-3xl">
                    <h2 className="text-3xl font-semibold">Sinopse</h2>
                    <p className='text-2xl flex items-center gap-2'>{props.summary}</p>
                </section>
            </article>
        </div>
    )
}