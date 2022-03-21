import React from 'react';
import './NewsCard.css';

function NewsCard(props){
  const {
    newsItem,
    cardType,
    isLoggedIn} = props;

  const [isBookmarkHover, setIsBookmarkHover] = React.useState(false);
  const [isNewsCardSaved, setIsNewsCardSaved] = React.useState(false);
  const [isDeleteHover, setIsDeleteHover]     = React.useState(false);

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

  // Event handlers for a search result card
  const handleBookmarkMouseEnter = () => {
    setIsBookmarkHover(true);
  }

  const handleBookmarkMouseLeave = () => {
    setTimeout(() => setIsBookmarkHover(false), 800);
  }

  const handleBookmarkClick = () => {
    if(isLoggedIn){
      setIsNewsCardSaved(!isNewsCardSaved);
    }
    props.handleUserSignInClick();
  }

  const handleSignInButtonClick = () => {
    props.handleUserSignInClick();
  }

  // Event handlers for a saved news card
  const handleDeleteMouseEnter = () => {
    setIsDeleteHover(true);
  }

  const handleDeleteMouseLeave = () => {
    setTimeout(() => setIsDeleteHover(false), 200);
  }

  const handleDeleteClick = () => {
    console.log("the saved card is deleted");
  }

  const bookmarkBtnClassName = `news-card__bookmark
    ${(cardType === 'search-result') && `news-card__bookmark_visible`}
    ${(isNewsCardSaved) && `news-card__bookmark_saved`}
    ${(isBookmarkHover) && `news-card__bookmark_hover`}`;

  const signInBtnClassName = `news-card__sign-in
    ${(!isLoggedIn && isBookmarkHover) && `news-card__sign-in_visible`}`;

  const keywordTagClassName = `news-card__keyword
    ${(cardType === 'saved-news') && `news-card__keyword_visible`}`;

  const deleteBtnClassName = `news-card__delete
    ${(cardType === 'saved-news') && `news-card__delete_visible`}
    ${(isDeleteHover) && `news-card__delete_hover`}`;

  const deleteTooltipClassName = `news-card__delete-tooltip
    ${(isDeleteHover) && `news-card__delete-tooltip_visible`}`;

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
      {/* Controls for a search result card */}
      <button
        className={bookmarkBtnClassName}
        onMouseEnter={handleBookmarkMouseEnter}
        onMouseLeave={handleBookmarkMouseLeave}
        onClick={handleBookmarkClick}>
      </button>
      <button
        className={signInBtnClassName}
        onClick={handleSignInButtonClick}>
          Sign in to save articles
      </button>
      {/* Controls for a saved news card */}
      <p className={keywordTagClassName}>Photography</p>
      <button
        className={deleteBtnClassName}
        onMouseEnter={handleDeleteMouseEnter}
        onMouseLeave={handleDeleteMouseLeave}
        onClick={handleDeleteClick}>
      </button>
      <p className={deleteTooltipClassName}>Remove from saved</p>
    </article>
  );
}

export default NewsCard;
