import Link from 'next/link';

// import '../styles/NavBar.css';

// import '../styles/globals.css';

const NavBar = () => {
  return (
    <nav>
      <Link className='link-1' href="/personagens">
       Personagens
      </Link>

      <Link className='link-2' href="/sobre">
       Blog da Riley
      </Link>

    </nav>
  );
};

export default NavBar;