import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head />
      <div className=' h-screen  bg-bg-light px-10 text-xl font-bold text-font-light dark:bg-bg-dark dark:text-font-dark'>
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
