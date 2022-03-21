import React  from 'react';
import {
  NavLink
}             from 'react-router-dom';
import './Navigation.css';
import logoutWhite from '../../images/logout-white.svg';
import logoutBlack from '../../images/logout-black.svg';

function Navigation(props){
  const {
    isLoggedIn,
    handleUserSignInClick,
    handleUserSignOutClick,
    isMenuOpen,
    isLightColoredHeader } = props;

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const changeScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeScreenWidth);
    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    }
  }, []);

  const navClassName = `nav
  ${(isLightColoredHeader) && `nav_white`}
  ${(isMenuOpen) && `nav_open` }`;

  const navItemClassName = `nav__item
  ${(isLightColoredHeader) ? `nav__item_hover_black` : `nav__item_hover_white`}`;

  const navLinkClassName = `nav__link
  ${(isLightColoredHeader) && `nav__link_white`}`;

  const navButtonClassName = `nav__button
  ${(isLightColoredHeader) && `nav__button_white`}
  ${(isLoggedIn)           && `nav__button_small`}`;

  const handleSignIn = () => handleUserSignInClick();
  const handleSignOut = () => handleUserSignOutClick();

  const renderButton = () => {
    if(!isLoggedIn){
      return (
        <button className={navButtonClassName} onClick={handleSignIn}>
          Sign In
        </button>
      );
      }

    return (
      <button className={navButtonClassName} onClick={handleSignOut}>
        Elise
        <img className="nav__logout" src={(isLightColoredHeader) ? logoutBlack : logoutWhite} alt="logout" />
      </button>
    );
  }

  return (
    <nav className={navClassName} aria-label="primary">
      {(isMenuOpen || screenWidth > 500) && (<ul className="nav__list">
        <li className={navItemClassName}>
          <NavLink to="/" className={navLinkClassName}>Home</NavLink>
        </li>
        {(isLoggedIn) && (<li className={navItemClassName}>
          <NavLink to="/articles" className={navLinkClassName}>Saved articles</NavLink>
        </li>)}
        <li className="nav__item">
          {renderButton()}
        </li>
      </ul>)}
    </nav>
  );
}

export default Navigation;
