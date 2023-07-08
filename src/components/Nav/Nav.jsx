import { Link, useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const growMenu = () => {
    const search = document.querySelector('.search')

    if (search.classList.contains('md:w-[11rem]')) {
        search.classList.remove('md:w-[11rem]')
        search.classList.add('md:w-full')

        return
    }

    search.classList.remove('md:w-full')
    search.classList.add('md:w-[11rem]')
}

export const Nav = () => {
    const navigate = useNavigate()

    function search(element) {
        element.preventDefault()

        const inputSearch = document.querySelector('.input-search')
        if (!inputSearch.value) return

        navigate(`/search?query=${inputSearch.value}`)
    }


    return (
        <nav className="nav bg-color-1 absolute -top-36 left-0 right-0 -z-10 md:z-auto md:-translate-y-0 md:flex items-center md:bg-transparent md:relative md:top-0 transition md:transition-none duration-300 ease-in-out shadow-lg md:shadow-none md:pr-[12.25rem]">
            <ul className={'text-white font-medium flex flex-col gap-2 md:gap-0 text-3xl text-right md:p-0 md:flex-row h-full py-5'}>
                <li className="relative">
                    <Link to="/" className="md:flex md:items-center md:justify-center md:after:content-[''] after:absolute md:after:bottom-full md:hover:after:bg-color-4 md:hover:after:translate-y-2 md:after:duration-300 duration-300 md:after:bg-white after:w-full md:after:h-2 px-5 h-full hover:underline md:hover:no-underline hover:opacity-90 hover:text-color-4">Início</Link>
                </li>
                <li className="relative">
                    <Link to="/filmes/populares/" className="md:flex md:items-center md:justify-center md:after:content-[''] after:absolute md:after:bottom-full md:hover:after:bg-color-4 md:hover:after:translate-y-2 md:after:duration-300 duration-300 md:after:bg-white after:w-full md:after:h-2 px-5 h-full hover:underline md:hover:no-underline hover:opacity-90 hover:text-color-4">Populares</Link>
                </li>
                <li className="relative">
                    <Link to="/filmes/melhoresavaliados/" className="md:flex md:items-center md:justify-center md:after:content-[''] after:absolute md:after:bottom-full md:hover:after:bg-color-4 md:hover:after:translate-y-2 md:after:duration-300 duration-300 md:after:bg-white after:w-full md:after:h-2 px-5 h-full hover:underline md:hover:no-underline hover:opacity-90 hover:text-color-4">Melhores Avaliados</Link>
                </li>
            </ul>

            <div className="search md:grid md:items-center md:absolute md:right-0 md:duration-300 md:w-[11rem] md:h-full" onFocus={growMenu} onBlur={growMenu}>
                <form onSubmit={search} className="flex mx-5 mb-5 md:m-0 h-14">
                    <input type="search" placeholder="Buscar" className="input-search pl-4 text-2xl rounded-l-2xl w-full" />

                    <button type="" className="bg-color-2 flex justify-center items-center md:bg-color-1 w-16 rounded-r-2xl">
                        <FaSearch className="w-16 h-16 cursor-pointer p-4 text-white hover:text-color-4 duration-300" />
                    </button>
                </form>
            </div>
        </nav>
    )
}
