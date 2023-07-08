import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { ErrorPage } from './components/404/ErrorPage.jsx'
import { Home } from './pages/Home.jsx'
import { Search } from './pages/Search.jsx'
import { PopularMovies } from './pages/PopularMovies.jsx'
import { TopRatedMovies } from './pages/TopRatedMovies.jsx'
import { Movie } from './pages/Movie.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/filmes/populares/",
        element: <PopularMovies />
      },
      {
        path: "/filmes/melhoresavaliados/",
        element: <TopRatedMovies />
      },
      {
        path: "/filmes/:id",
        element: <Movie />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
