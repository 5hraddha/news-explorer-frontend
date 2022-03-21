import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({savedNews}){
  // To be taken from the context
  const currentUser = 'Elise';

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__wrapper">
        <p className="saved-news-header__section-name">Saved articles</p>
        <h2 className="saved-news-header__title">
          {currentUser}, you have {savedNews.length || 5} saved articles
        </h2>
        <p className="saved-news-header__keywords">
          By keywords: <span className="saved-news-header__keywords_bold">Nature, Yellowstone, and 2 other</span></p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
