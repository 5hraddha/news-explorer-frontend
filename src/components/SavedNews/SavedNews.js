import React        from 'react';
import './SavedNews.css';
import NewsCard     from '../NewsCard/NewsCard';

function SavedNews(props){
  const {
    isLoggedIn,
    savedNews } = props;

  return (
    <section className="saved-news">
      <div className="saved-news__wrapper">
        <div className="saved-news__cards">
          {savedNews.map((newsItem, index) => (
            <NewsCard
            key={index}
            newsItem={newsItem}
            cardType='saved-news'
            isLoggedIn={isLoggedIn} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
