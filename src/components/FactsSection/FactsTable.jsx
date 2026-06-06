import React from 'react';
import styles from './FactsSection.module.css';

const FactsTable = () => {
  return (
    <>
      <table className={styles.tableContainer}>
        <caption className={styles.tableTitle}>
          Data about the planets of our solar system (Planetary facts taken from
          NASA)
        </caption>

        <thead className={styles.tableHead}>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell} scope='col' colSpan={2}></th>

            <th className={styles.headerCell} scope='col'>
              Name
            </th>
            <th className={styles.headerCell} scope='col'>
              Mass (10 24kg)
            </th>
            <th className={styles.headerCell} scope='col'>
              Diameter (km)
            </th>
            <th className={styles.headerCell} scope='col'>
              Density (kg/m³)
            </th>
            <th className={styles.headerCell} scope='col'>
              Gravity (m/s²)
            </th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {/* Terrestrial Planets */}
          <tr className={styles.dataRow}>
            <th
              className={styles.categoryCell}
              scope='rowgroup'
              colSpan={2}
              rowSpan={4}
            >
              Terrestrial Planets
            </th>
            <th className={styles.planetName} scope='row'>
              Mercury
            </th>
            <td className={styles.dataCell}>0.330</td>
            <td className={styles.dataCell}>4,879</td>
            <td className={styles.dataCell}>5429</td>
            <td className={styles.dataCell}>3.7</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.planetName} scope='row'>
              Venus
            </th>
            <td className={styles.dataCell}>4.87</td>
            <td className={styles.dataCell}>12,104</td>
            <td className={styles.dataCell}>5243</td>
            <td className={styles.dataCell}>8.9</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.planetName} scope='row'>
              Earth
            </th>
            <td className={styles.dataCell}>5.97</td>
            <td className={styles.dataCell}>12,756</td>
            <td className={styles.dataCell}>5514</td>
            <td className={styles.dataCell}>9.8</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.planetName} scope='row'>
              Mars
            </th>
            <td className={styles.dataCell}>0.642</td>
            <td className={styles.dataCell}>6,792</td>
            <td className={styles.dataCell}>3934</td>
            <td className={styles.dataCell}>3.7</td>
          </tr>

          {/* Jovian Planets */}
          <tr className={styles.dataRow}>
            <th className={styles.categoryCell} scope='rowgroup' rowSpan={4}>
              Jovian Planets
            </th>
            <th className={styles.subCategoryCell} scope='rowgroup' rowSpan={2}>
              Gas Giants
            </th>
            <th className={styles.planetName} scope='row'>
              Jupiter
            </th>
            <td className={styles.dataCell}>1898</td>
            <td className={styles.dataCell}>142,984</td>
            <td className={styles.dataCell}>1326</td>
            <td className={styles.dataCell}>23.1</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.planetName} scope='row'>
              Saturn
            </th>
            <td className={styles.dataCell}>568</td>
            <td className={styles.dataCell}>120,536</td>
            <td className={styles.dataCell}>687</td>
            <td className={styles.dataCell}>9.0</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.subCategoryCell} scope='rowgroup' rowSpan={2}>
              Ice Giants
            </th>
            <th className={styles.planetName} scope='row'>
              Uranus
            </th>
            <td className={styles.dataCell}>86.8</td>
            <td className={styles.dataCell}>51,118</td>
            <td className={styles.dataCell}>1271</td>
            <td className={styles.dataCell}>8.7</td>
          </tr>

          <tr className={styles.dataRow}>
            <th className={styles.planetName} scope='row'>
              Neptune
            </th>
            <td className={styles.dataCell}>102</td>
            <td className={styles.dataCell}>49,528</td>
            <td className={styles.dataCell}>1638</td>
            <td className={styles.dataCell}>11.0</td>
          </tr>

          {/* Dwarf Planets */}
          <tr className={styles.dataRow}>
            <th className={styles.categoryCell} scope='rowgroup' colSpan={2}>
              Dwarf Planets
            </th>
            <th className={styles.planetName} scope='row'>
              Pluto
            </th>
            <td className={styles.dataCell}>0.0146</td>
            <td className={styles.dataCell}>2,377</td>
            <td className={styles.dataCell}>1850</td>
            <td className={styles.dataCell}>0.7</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FactsTable;
