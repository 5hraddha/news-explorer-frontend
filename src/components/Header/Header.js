import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(){
  return (
    <header className="header">
      <div className="header__wrapper">
        <h2 className="header__logo">NewsExplorer</h2>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
