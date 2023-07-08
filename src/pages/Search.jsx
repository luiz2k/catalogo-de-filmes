import { useState, createContext } from 'react'
export const SearchContext = createContext()

import { useSearchParams } from 'react-router-dom'
import { SearchList } from '../components/SearchList/SearchList'

export const Search = () => {
    window.scrollTo(0, 0);

    const [searchParams] = useSearchParams()
    const routeParameters = searchParams.get("query")
    const [query, setQuery] = useState(routeParameters)

    document.title = `Busca - ${query}`

    return (
        <SearchContext.Provider value={{ routeParameters, query, setQuery }}>
            <h2 className='text-5xl text-center p-10 font-semibold text-color-2'>Resultado Para <span className='opacity-60'>{query}</span></h2>
            <SearchList language={'pt-br'} />
        </SearchContext.Provider>
    )
}