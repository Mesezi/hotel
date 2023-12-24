import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Jost , Montserrat, Poppins} from 'next/font/google'

// const jost = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] })
const jost = Montserrat({  subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${jost.className}`}>
<Component {...pageProps} />
  </main>
  
}
