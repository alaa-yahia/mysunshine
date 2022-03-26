import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head />
      <div
        className='h-screen text-white'
        style={{
          background: `rgb(246,238,242)`,
          background: `radial-gradient(circle, rgb(168, 66, 227,1) 10%, rgba(212, 38, 185,1) 100%)`,
        }}
      >
        <Header />
        <Hero />
      </div>

      <div className='flex h-screen items-center justify-center'>
        <main>
          <h1 className='bg-gray-70 text-5xl font-medium leading-tight'>
            Welcome to Alla website!
          </h1>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
