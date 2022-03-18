import React          from 'react';
import './NewsCardList.css';
import NewsCard       from '../NewsCard/NewsCard';

function NewsCardList(props){
  const {
    isLoggedIn,
    handleLogin,
    handleSave,
    handleDelete,
    news,
    noOfCardsToRender } = props;
  const [cardsToRender, setCardsToRender] = React.useState(news.slice(0, noOfCardsToRender));
  const showMoreBtnClassName = `show-more__btn ${(cardsToRender.length >= news.length) && `show-more__btn_hidden`}`;

  const handleShowMoreClick = () => {
    setCardsToRender([...cardsToRender,
      ...news.slice(cardsToRender.length, cardsToRender.length + noOfCardsToRender)]);
  }

  return (
    <section className="news-card-list">
      <div className="news-card-list__wrapper">
        <h2 className="news-card-list__title">Search results</h2>
        <div className="news-card-list__cards">
          {cardsToRender.map((newsItem, index) => (
            <NewsCard
              key={index}
              newsItem={newsItem}
              isLoggedIn={isLoggedIn}
              handleLogin={handleLogin}
              handleSave={handleSave}
              handleDelete={handleDelete} />
          ))}
        </div>
        <div className="show-more">
          <button className={showMoreBtnClassName} onClick={handleShowMoreClick}>
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsCardList;
