import React        from 'react';
import './About.css';
import authorImage  from'../../images/author.png';

function About(){
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__img-container">
          <img className="about__img" src={authorImage} alt="author profile" />
        </div>
        <div className="about__info-container">
          <h2 className="about__title">About the author</h2>
          <div className="about__content">
            <p className="about__para">This block describes the project author.
            Here you should indicate your name, what you do, and which development
            technologies you know.</p>
            <p className="about__para">You can also talk about your experience with Practicum,
              what you learned there, and how you can help potential customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
