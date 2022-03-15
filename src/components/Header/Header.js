import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(){
  const [isMenuOpen, setIsMenuOpen]   = React.useState(false);
  const headerClassName = `${(isMenuOpen) ? `header header_black`: `header`}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={headerClassName}>
      <div className="header__wrapper">
        <h2 className="header__logo">NewsExplorer</h2>
        <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;
