import React from 'react';
import './SearchForm.css';

function SearchForm(){
  const [searchQuery, setSearchQuery] = React.useState();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <form className="search">
      <div className="search__wrapper">
        <input
          type="text"
          className="search__input"
          placeholder="Enter topic"
          value={searchQuery}
          onChange={handleInputChange} />
        <button className="search__button">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
