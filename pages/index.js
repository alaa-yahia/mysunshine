import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Head>
        <title>Alaa</title>
        <meta name="description" content="Alla Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-5xl font-medium leading-tight'>
          Welcome to Alla website!
        </h1>

  
      </main>

      <footer>

      </footer>
    </div>
  )
}
