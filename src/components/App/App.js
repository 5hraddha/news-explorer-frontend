import React            from 'react';
import './App.css';
import Header           from '../Header/Header';
import Main             from '../Main/Main';
import NewsCardList     from '../NewsCardList/NewsCardList';
import About            from '../About/About';
import SavedNewsHeader  from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews        from '../SavedNews/SavedNews';
import Footer           from '../Footer/Footer';
import news             from '../../utils/news';
import savedNews        from '../../utils/saved-news';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const NO_OF_CARDS_TO_RENDER = 3;
  const savedArticles = [];

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
  }

  const handleUserSignInClick = () => {
    setIsLoggedIn(true);
    console.log("Logged in");
  }

  const handleUserSignOutClick = () => {
    setIsLoggedIn(false);
    console.log("Logged out");
  }

  const handleDeleteCardClick = () => {
    console.log("The saved card is deleted");
  }

  return (
    <div className="app">
      <Header />
      <Main />
      <NewsCardList
        isLoggedIn={isLoggedIn}
        handleUserSignInClick={handleUserSignInClick}
        news={news}
        noOfCardsToRender={NO_OF_CARDS_TO_RENDER} />
      <SavedNewsHeader savedArticles={savedArticles} />
      <SavedNews
        isLoggedIn={isLoggedIn}
        savedNews={savedNews} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
