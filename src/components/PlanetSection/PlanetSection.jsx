import React from 'react';
import styles from './Planet.module.css';

const PlanetSection = () => {
  return (
    <>
      {/* Planet Section */}
      <section className={styles.planetSection}>
        <div className={styles.mainContent}>
          <h2>Visualizing the Differences Between Planets</h2>

          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how <br /> vastly different
            terrestrial planets are from gas giants and ice giants.
          </p>
        </div>

        <figure>
          <img
            src='https://i.pinimg.com/1200x/f6/ac/54/f6ac54f64af086b9ad80aca667a221ce.jpg'
            alt='Comparison of planets showing size differences'
            width={387}
            height={252}
            loading='lazy'
          />
          <figcaption>
            <p>Planet Name</p>
            <p>Distance from Sun</p>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default PlanetSection;
