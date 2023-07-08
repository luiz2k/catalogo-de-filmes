import ErrorImage from '../../assets/images/ErrorPage/404.svg'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-bgColor-1 p-2'>
      <img src={ErrorImage} alt="Imagem de erro 404" className='max-w-3xl' />

      <div className='flex flex-col items-center gap-10'>
        <h2 className='text-center text-4xl text-color-2 font-bold'>A página que você procura não foi encontrada</h2>
        <Link to="/" className='text-2xl rounded-full bg-color-2 hover:bg-color-4 w-fit p-4 text-white duration-300 font-bold'>VOLTAR PARA O INÍCIO</Link>
      </div>
    </div>
  )
}