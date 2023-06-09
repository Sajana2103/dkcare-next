import '@/styles/globals.css'
import cls from 'classnames'
import { Manrope } from 'next/font/google'
import Footer from '../../components/homepage/footer'
import Navigation from '../../components/navigation'

const manrope = Manrope({subsets:['latin']})
export default function App({ Component, pageProps }) {
  const hello = () => {
    console.log('HELLO')
  }
  return (
    <div className={`${manrope.className}`}>
  
      <Component {...pageProps} hello={hello} />
    </div>
  )
}
