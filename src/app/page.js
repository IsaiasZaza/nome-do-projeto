import Image from 'next/image'
import Slider from './components/Slider'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className='text-center bg-black text-white py-2'>
        Seja nosso Cliente agora. <a className='font-semibold'>Comece agora</a>
      </div>
      <Header />
      <Slider />
      <Footer />
    </>
  )
}
