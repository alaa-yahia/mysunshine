import Head from '../components/Head';

export default function Home() {
  return (
    <>
      <Head />
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
