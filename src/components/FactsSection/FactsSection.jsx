import React from 'react';
import FactsTable from './FactsTable';
import styles from './FactsSection.module.css';

const FactsSection = () => {
  return (
    <>
      {/* Table Section */}
      <section id='table-section' className={styles.factsSection}>
        <div className={styles.header}>
          <h2>Planetary Facts at a Glance</h2>

          <p>
            Below is a comparative table of major planets in our solar system.
            The data highlights key physical properties used by astronomers and
            researchers worldwide.
          </p>
        </div>

        <FactsTable />
      </section>
    </>
  );
};

export default FactsSection;
