import '../styles/output.css'
import type { AppProps } from 'next/app'
import { UberProvider } from '../context/uberContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UberProvider>
      <Component {...pageProps} />
    </UberProvider>
  )
}
