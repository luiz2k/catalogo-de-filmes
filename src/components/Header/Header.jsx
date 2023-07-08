import { Nav } from "../Nav/Nav";

import { Link } from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";

export const Header = () => {
    const changeMenu = () => {
        const nav = document.querySelector('.nav')

        const open = document.querySelector('.open')
        const close = document.querySelector('.close')

        nav.classList.toggle('translate-y-60')

        close.classList.toggle('opacity-100')
        open.classList.toggle('opacity-0')
    }

    const changeTheme = () => {
        const html = window.document.querySelector('html')

        const light = document.querySelector('.lightT')
        const dark = document.querySelector('.darkT')

        html.classList.toggle('light')
        html.classList.toggle('dark')

        if (html.classList[0] === 'light') {
            light.classList.remove('hidden')
            dark.classList.add('hidden')
        } else {
            dark.classList.remove('hidden')
            light.classList.add('hidden')
        }

        localStorage.setItem('darkTheme', html.classList[0])
    }

    const getTheme = () => {
        const html = window.document.querySelector('html')

        const light = document.querySelector('.lightT')
        const dark = document.querySelector('.darkT')

        const theme = localStorage.getItem('darkTheme')

        if (theme === 'light') {
            html?.classList.remove('dark')
            html?.classList.add('light')

            light?.classList.remove('hidden')
        } else if (theme === 'dark') {
            html?.classList.add('dark')
            html?.classList.remove('light')

            light?.classList.add('hidden')
            dark?.classList.remove('hidden')
        }
    }

    getTheme()

    return (
        <header className="fixed left-0 right-0 z-10 shadow-lg">
            <div className={'px-5 gap-5 flex justify-between h-24 bg-color-2'}>
                <h1 className={'text-white text-5xl my-5'}>
                    <Link to="/"><MdLocalMovies className="hover:rotate-180 duration-300 hover:text-color-4" /></Link>
                </h1>

                <Nav />

                <div className="flex gap-5">
                    <div className="text-white flex items-center relative w-[3rem] hover:text-color-4 text-5xl cursor-pointer" onClick={changeTheme}>
                        <BsFillSunFill className="lightT absolute duration-300" />
                        <IoIosMoon className="darkT absolute duration-300 hidden" />
                    </div>

                    <div className="text-white md:hidden flex items-center relative w-[3rem] hover:text-color-4 text-5xl cursor-pointer" onClick={changeMenu}>
                        <FaBars className="open duration-300 absolute" />
                        <FaTimes className="close opacity-0 duration-300 absolute" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header