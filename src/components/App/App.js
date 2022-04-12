import React            from 'react';
import {
  Route,
  Switch,
  }                     from 'react-router-dom';
import './App.css';
import ProtectedRoute   from '../ProtectedRoute/ProtectedRoute';
import Header           from '../Header/Header';
import Main             from '../Main/Main';
import NewsCardList     from '../NewsCardList/NewsCardList';
import About            from '../About/About';
import SavedNewsHeader  from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews        from '../SavedNews/SavedNews';
import Footer           from '../Footer/Footer';
import Login            from '../Login/Login';
import news             from '../../utils/news';
import savedNews        from '../../utils/saved-news';

function App() {
  const [isLoggedIn, setIsLoggedIn]                           = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen]               = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen]         = React.useState(false);
  const [registerEmail, setRegisterEmail]                     = React.useState('');
  const [registerUsername, setRegisterUsername]               = React.useState('');
  const [registerPassword, setRegisterPassword]               = React.useState('');
  const [loginEmail, setLoginEmail]                           = React.useState('');
  const [loginPassword, setLoginPassword]                     = React.useState('');

  const NO_OF_CARDS_TO_RENDER = 3;

  const handleLoginSubmit = () => {
    setIsLoginPopupOpen(false);
    console.log({loginEmail, loginPassword});
    setLoginEmail('');
    setLoginPassword('');
    setIsLoggedIn(true);
    console.log("Logged in");
  }

  const handleUserSignInClick = () => {
    setIsLoginPopupOpen(true);
  }

  const handleUserSignUpClick = () => {
    setIsRegisterPopupOpen(true);
  }

  const handleUserSignOutClick = () => {
    setIsLoggedIn(false);
    console.log("Logged out");
  }

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
  }

  const handleDeleteCardClick = () => {
    console.log("The saved card is deleted");
  }

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        handleUserSignInClick={handleUserSignInClick}
        handleUserSignOutClick={handleUserSignOutClick} />
      <Switch>
        <Route exact path="/">
          <Main />
          <NewsCardList
            isLoggedIn={isLoggedIn}
            handleUserSignInClick={handleUserSignInClick}
            news={news}
            noOfCardsToRender={NO_OF_CARDS_TO_RENDER} />
          <About />
        </Route>
        <ProtectedRoute isLoggedIn={isLoggedIn}  path="/articles">
          <SavedNewsHeader savedNews={savedNews} />
          <SavedNews
            isLoggedIn={isLoggedIn}
            savedNews={savedNews} />
        </ProtectedRoute>
      </Switch>
      <Footer />
      <Login
        isLoginPopupOpen={isLoginPopupOpen}
        onSubmit={handleLoginSubmit}
        onClose={closeAllPopups}
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword} />
    </div>
  );
}

export default App;
