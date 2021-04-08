import { Link } from "react-router-dom";
import * as S from "./Navbar.style";

const Navbar = () => {
  return (
    <S.Nav>
      <div>
        <h2> ⌨ typeracer </h2>
      </div>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/race'>Race</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>

      <S.Hamburger>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </S.Hamburger>

      <S.SocialLinks>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.facebook.com/powerty2'
        >
          <img
            src='https://img.icons8.com/bubbles/50/000000/facebook-new.png'
            alt='Facebook'
          />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/kuba.kurdziel_19'
        >
          <img
            src='https://img.icons8.com/bubbles/50/000000/instagram.png'
            alt='Instagram'
          />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.messenger.com/t/100005543894347'
        >
          <img
            src='https://img.icons8.com/bubbles/50/000000/facebook-messenger.png'
            alt='Messenger'
          />
        </a>
      </S.SocialLinks>
    </S.Nav>
  );
};

export default Navbar;
