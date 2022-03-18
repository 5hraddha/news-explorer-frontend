import React          from 'react';
import './App.css';
import Header         from '../Header/Header';
import Main           from '../Main/Main';
import NewsCardList   from '../NewsCardList/NewsCardList';
import About          from '../About/About';
import Footer         from '../Footer/Footer';
import news           from '../../utils/news';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const NO_OF_CARDS_TO_RENDER = 3;

  const handleLogin = () => {
    // Hit API endpoint
    setIsLoggedIn(true);
    console.log('Logged In');
  }

  const handleSave = () => {
    console.log('Article saved');
  }

  const handleDelete = () => {
    console.log('Article unsaved');
  }

  return (
    <div className="app">
      <Header />
      <Main />
      <NewsCardList
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleSave={handleSave}
        handleDelete={handleDelete}
        news={news}
        noOfCardsToRender={NO_OF_CARDS_TO_RENDER} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
