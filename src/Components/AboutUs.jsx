import React from "react";
import Style from "./About.module.css";

const About = () => {
  return (
    <div className={Style.aboutWrapper}>
      <header className={Style.hero}>
        <h1 className={Style.title}>About PikashowGames</h1>
        <p className={Style.subtitle}>
          Your destination for fun, thrill & endless gaming
        </p>
      </header>

      <section className={Style.section}>
        <h2 className={Style.heading}>A Widely Accepted Platform for Fun Seekers</h2>
        <p className={Style.text}>
          PikashowGames is an advanced gaming platform designed for online game lovers.
          All games available on our website are free to play and supported on desktop,
          mobile phones, tablets, and iPads. Just choose your favorite game and
          start playing instantly!
        </p>
        <p className={Style.text}>
          We help players of all ages explore some of the best PC and HTML5 games.
          From thrilling action challenges to brain-teasing puzzles, high-speed
          racing games, and relaxing cooking titles — there’s something for everyone.
        </p>
      </section>

      <section className={Style.section}>
        <h2 className={Style.heading}>We Compile the Best Online Games in One Place</h2>
        <p className={Style.text}>
          At PikashowGames, we bring you the most popular online game categories,
          including racing, puzzles, shooting, stickman, airplane games, and much more.
          Our library contains a growing list of thousands of high‑quality games
          curated especially for you.
        </p>
      </section>

      <section className={Style.section}>
        <h2 className={Style.heading}>A Brief Overview</h2>
        <p className={Style.text}>
          Established in 2025, PikashowGames is developed by a passionate team focused on
          delivering a premier gaming experience. With a collection of thousands of free
          games and many more under active development, we continue to evolve as one of
          India's most engaging online gaming destinations.
        </p>

        <div className={Style.statsGrid}>
          <div className={Style.statBox}>
            <h3>2025</h3>
            <p>Established In</p>
          </div>
          <div className={Style.statBox}>
            <h3>200+</h3>
            <p>In‑house Games</p>
          </div>
          <div className={Style.statBox}>
            <h3>5000+</h3>
            <p>Games Available</p>
          </div>
        </div>
      </section>

      <section className={Style.section}>
        <h2 className={Style.heading}>Our Mission</h2>
        <p className={Style.text}>
          To provide a huge collection of free online games that players of all ages
          are sure to love. Our team works passionately to support top creators, build
          a strong community, and enable gamers to enjoy premium experiences without
          any barriers.
        </p>
      </section>

      <section className={Style.section}>
        <h2 className={Style.heading}>Our Vision</h2>
        <p className={Style.text}>
          To become a globally recognized gaming platform accessible to every
          player, regardless of age or region. We aim to continue pushing
          boundaries to offer a high‑quality digital gaming ecosystem.
        </p>
      </section>

      <section className={Style.section}>
        <h2 className={Style.heading}>Join the Fun</h2>
        <p className={Style.text}>
          Sign up for free to earn rewards, get access to player statistics,
          customize your avatar, achieve high scores, and much more!
        </p>
        <button className={Style.ctaBtn}>JOIN NOW</button>
      </section>
    </div>
  );
};

export default About;
