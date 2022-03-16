import React from 'react';
import './Navigation.css';

function Navigation(props){
  const { isMenuOpen } = props;
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const navClassName = `nav ${(isMenuOpen) && `nav_open` }`;

  React.useEffect(() => {
    const changeScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeScreenWidth);
    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    }
  }, []);

  return (
    <nav className={navClassName} aria-label="primary">
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
    </nav>
  );
}

export default Navigation;
