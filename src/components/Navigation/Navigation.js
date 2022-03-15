import React from 'react';
import './Navigation.css';

function Navigation(props){
  const { isMenuOpen, toggleMenu } = props;
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

  const hamburgerButtonClassName = `hamburger ${(isMenuOpen)? `hamburger_close`: ``}`;

  return (
    <nav className="nav">
      {(isMenuOpen || screenWidth > 500) && (<ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#home">Home</a>
        </li>
        <li className="nav__item">
          <button className="nav__button">
            Sign In
          </button>
        </li>
      </ul>)}
      <button className={hamburgerButtonClassName} onClick={toggleMenu}></button>
    </nav>
  );
}

export default Navigation;
