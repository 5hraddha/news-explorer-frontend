import React          from 'react';
import './Footer.css';
import GitHubIcon     from '../../images/social/github.svg';
import FacebookIcon   from '../../images/social/facebook.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Shraddha | News API
        </p>
        <nav className="footer-nav" aria-label="secondary">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="/">Home</a>
            </li>
            <li className="footer-nav__item">
              <a className="footer-nav__link" href="https://practicum.yandex.com/">Practicum by Yandex</a>
            </li>
          </ul>
        </nav>
        <ul className="footer__social-links">
          <li>
            <a className="footer__social-link" href="https://github.com/5hraddha">
              <img className="footer__social-icon" src={GitHubIcon} alt="Shraddha's Github" />
            </a>
          </li>
          <li>
            <a className="footer__social-link" href="https://facebook.com">
              <img className="footer__social-icon" src={FacebookIcon} alt="Shraddha's Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
