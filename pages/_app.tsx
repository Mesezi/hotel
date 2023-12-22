import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Jost , Montserrat} from 'next/font/google'

const jost = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${jost.className}`}>
<Component {...pageProps} />
  </main>
  
}
