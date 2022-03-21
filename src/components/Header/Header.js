import React        from 'react';
import {
  useLocation
}                   from 'react-router-dom';
import './Header.css';
import Navigation   from '../Navigation/Navigation';

function Header(props){
  const {
    isLoggedIn,
    handleUserSignInClick,
    handleUserSignOutClick,
  } = props;
  const [isMenuOpen, setIsMenuOpen]                     = React.useState(false);
  const [isLightColoredHeader, setIsLightColoredHeader] = React.useState(false);

  const headerClassName           = `header
    ${(isLightColoredHeader)                && `header_white`}
    ${(isMenuOpen)                          && `header_absolute`}
    ${(isMenuOpen && !isLightColoredHeader) && `header_black`}`;

  const headerWrapperClassName = `header__wrapper
    ${(isMenuOpen && !isLightColoredHeader) && `header__wrapper_open`}
    ${(isLightColoredHeader)                && `header__wrapper_white`}`;

  const overlayClassName          = `overlay ${(isMenuOpen) && `overlay_visible`}`;

  const hamburgerButtonClassName  = `hamburger
    ${(!isMenuOpen && isLightColoredHeader) && `hamburger_white`}
    ${(isMenuOpen && !isLightColoredHeader) && `hamburger_close_black`}
    ${(isMenuOpen && isLightColoredHeader)  && `hamburger_close_white`}`;

  const { pathname } = useLocation();
  React.useEffect(() => {
    setIsLightColoredHeader(pathname === '/articles');
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={headerClassName}>
      <div className={overlayClassName}></div>
      <div className={headerWrapperClassName}>
        <h2 className="header__logo">NewsExplorer</h2>
        <Navigation
          isLoggedIn={isLoggedIn}
          handleUserSignInClick={handleUserSignInClick}
          handleUserSignOutClick={handleUserSignOutClick}
          isMenuOpen={isMenuOpen}
          isLightColoredHeader={isLightColoredHeader} />
        <button className={hamburgerButtonClassName} onClick={toggleMenu}></button>
      </div>
    </header>
  );
}

export default Header;
