import React from 'react';
import styles from './Planet.module.css';
import { PlanetCard } from './PlanetCard';

import usePlanets from '../../hooks/usePlanets';

const PlanetSection = () => {
  const { planets, loading, error } = usePlanets();

  if (loading) {
    return <p>Loading planets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      {/* Planet Section */}
      <section id='planet-section' className={styles.planetSection}>
        <div className={styles.mainContent}>
          <h2>Visualizing the Differences Between Planets</h2>

          <p>
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how <br /> vastly different
            terrestrial planets are from gas giants and ice giants.
          </p>
        </div>

        <div className={styles.planetGrid}>
          {planets.map((planet) => (
            <PlanetCard key={planet.planet} planet={planet} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PlanetSection;
