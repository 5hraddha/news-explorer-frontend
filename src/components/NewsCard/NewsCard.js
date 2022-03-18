import React from 'react';
import './NewsCard.css';

function NewsCard({newsItem, isLoggedIn, handleLogin, handleSave, handleDelete}){
  const [isBookmarkHover, setIsBookmarkHover] = React.useState(false);

  const { title, article, source, date, image} = newsItem;
  const newsTitle   = title || 'Title not available';
  const newsArticle = article || 'Content not available';
  const newsSource  = source || 'Unknown';

  // Covert Date to correct format - Month DD, YYYY
  const getNewsDate = () => {
    if(!date){
      return 'Unknown';
    }
    return new Date(date).toLocaleDateString(
      'en-us',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    );
  }

  const handleMouseEnter = () => {
    setIsBookmarkHover(true);
  }

  const handleMouseLeave = () => {
    setTimeout(() => setIsBookmarkHover(false), 400);
  }

  const handleBookmarkClick = () => {
    if(isLoggedIn){
      //If article is saved already,
      handleDelete(); // and change the bookmark icon
      //If article is not saved yet
      handleSave(); // and change the bookmark icon
    }
    handleLogin();
  }

  // Change the bookmark icon to marked, if the article has been saved; delete otherwise
  const bookmarkBtnClassName = ``;
  const signInBtnClassName = `news-card__sign-in ${(!isLoggedIn && isBookmarkHover) && `news-card__sign-in_visible`}`;

  return (
    <article className="news-card">
      <img
        className="news-card__img"
        src={image}
        alt={newsTitle} />
      <div className="news-card__content">
        <p className="news-card__date">{getNewsDate()}</p>
        <a className="news-card__link" href="#">
          <h3 className="news-card__title">{newsTitle}</h3>
          <p className="news-card__article">{newsArticle}</p>
        </a>
        <p className="news-card__source">{newsSource}</p>
      </div>
      <button
        className="news-card__bookmark"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleBookmarkClick}>
      </button>
      <button
        className={signInBtnClassName}
        onClick={handleLogin}>
          Sign in to save articles
      </button>
    </article>
  );
}

export default NewsCard;
