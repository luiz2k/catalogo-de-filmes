export const Footer = () => {
  return (
    <footer className='bg-color-2 p-10 text-center text-3xl text-white flex flex-col gap-7 sm:gap-0 sm:grid grid-cols-2'>
      <div className='flex justify-center items-center'>
        <p>Projeto pessoal feito por <a href="#" target='_blank' className='hover:underline'><strong className='whitespace-nowrap'>Luiz Teles</strong></a></p>
      </div>

      <div className='flex flex-col items-center sm:text-start'>
        <ul><span className='opacity-60'>Acesse também</span>
          <div className="pl-5 flex gap-5">
            <li><a href="https://github.com/luiz2k" target='_blank' className='hover:underline'>GitHub</a></li>
            <li><a href="#" target='_blank' className='hover:underline'>Linkedin</a></li>
            <li><a href="https://portfolio-luiz2k.vercel.app" target='_blank' className='hover:underline'>Portfólio</a></li>
          </div>
        </ul>
      </div>

    </footer>
  )
}
