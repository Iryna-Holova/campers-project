import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Modal from 'components/Modal/Modal';
import css from './Header.module.css';

const PAGES = [
  { page: 'Home', path: '/' },
  { page: 'Catalog', path: '/catalog' },
  { page: 'Favorites', path: '/favorites' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={css.header + ' container'}>
      <button
        onClick={handleToggleMenu}
        className={`
        ${css.burger}
        ${isOpen ? css.open : ''}
      `}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={`
        ${css.menu}
        ${isOpen ? css.open : ''}
      `}
      >
        <ul className={css.link_list}>
          {PAGES.map(({ page, path }, idx) => (
            <li key={idx}>
              <NavLink to={path} onClick={handleCloseMenu} className={css.link}>
                {page}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="contacts"
              smooth={true}
              onClick={handleCloseMenu}
              className={css.link}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && <Modal onClose={handleCloseMenu} />}
    </header>
  );
};

export default Header;
