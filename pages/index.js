import Head from '../components/Head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Hero />

      <div className='flex h-screen items-center justify-center'>
        <main>
          <h1 className='text-5xl font-medium leading-tight'>
            Welcome to Alla website!
          </h1>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
