import Logo from './Logo';

export default function Header() {
  return (
    <header className='flex items-center'>
      <Logo />
      <nav className='flex flex-1 justify-end py-3 '>
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
