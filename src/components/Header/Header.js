import React        from 'react';
import './Header.css';
import Navigation   from '../Navigation/Navigation';

function Header(){
  const [isMenuOpen, setIsMenuOpen]   = React.useState(false);

  const headerClassName           = `header ${(isMenuOpen) && `header_black`}`;
  const overlayClassName          = `overlay ${(isMenuOpen) && `overlay_visible`}`;
  const hamburgerButtonClassName  = `hamburger ${(isMenuOpen) && `hamburger_close`}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={headerClassName}>
      <div className={overlayClassName}></div>
      <div className="header__wrapper">
        <h2 className="header__logo">NewsExplorer</h2>
        <Navigation isMenuOpen={isMenuOpen} />
        <button className={hamburgerButtonClassName} onClick={toggleMenu}></button>
      </div>
    </header>
  );
}

export default Header;
