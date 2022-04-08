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
          background: `linear-gradient(90deg ,rgba(58, 45, 239,1) 0%,rgba(255, 0, 255,1)100% )`,
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
