import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <main className='max-w-[1400px] m-auto min-h-[869px] px-5 text-textColor-1 pt-[6rem]'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
