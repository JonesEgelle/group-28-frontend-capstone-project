import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          src='src/assets/icons/headerIcon.svg'
          alt='Company Logo'
          width={121}
          height={52}
          loading='lazy'
        />
      </header>
      <section className={styles.heroSection}>
        <div>
          <h1>
            Explore Our Solar System <br />
            Through Data
          </h1>

          <p>
            Understand the planets not just by name, but by measurable <br />
            facts. From size and mass to gravity and density, this page
            <br /> breaks down the solar system in a clear, data-driven way.
          </p>

          <nav className='cta-container'>
            <a href='#table-section'>Explore the Data</a>
            <a href='#form-section'>Contact Us</a>
          </nav>
        </div>

        <div className={styles.heroimg}>
          <img
            src='src/assets/heroGlobe.svg'
            alt='Planet'
            width={644}
            height={644}
            loading='lazy'
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
