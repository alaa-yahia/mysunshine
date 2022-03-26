export default function Header() {
  return (
    <header className='flex'>
      <h1 className='p-3 text-3xl'>ALAA</h1>
      <nav className='flex flex-1 justify-end py-3 px-7'>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}
