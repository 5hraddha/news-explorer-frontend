import React      from 'react';
import './App.css';
import Header     from '../Header/Header';
import Main       from '../Main/Main';
import About      from '../About/About';
import Footer     from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
