import '../sass/app.sass'
import { Open_Sans } from 'next/font/google'
import Head from 'next/head'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:," />
      </Head>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
} 