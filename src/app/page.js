import Image from 'next/image'
import Slider from './components/Slider'
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'

export default function Home() {
  return (
    <>
      <div className='text-center bg-black text-white py-2'>
        Seja nosso Cliente <a className='font-semibold text-green-300 border-b-2 border-green-700 cursor-pointer'>Comece agora</a>
      </div>
      <Header />
      <Slider />
      <Services />
      <Footer />
    </>
  )
}
